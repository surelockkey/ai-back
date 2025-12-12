import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedPage } from './entity/constructed-page.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository, In } from 'typeorm';
import {
  CreateConstructedPageDto,
  UpdateConstructedPageDto,
} from './dto/constructed-page.dto';
import { GraphQLError } from 'graphql';
import { ConstructedBlockService } from './constructed-block/constructed-block.service';
import { ConstructedMetaInfoService } from './constructed-meta-info/constructed-meta-info.service';
import { ConstructedPreviewService } from './constructed-preview/constructed-preview.service';
import { GetConstructedPagesArgs } from './args/get-constructed-pages.args';
import * as moment from 'moment';
import { SitemapService } from '../sitemap/sitemap.service';
import { ConstructedPageType } from './enum/constructed-page-type.enum';
import { ConstructedPageCompany } from './constructed-page-company/entity/constructed-page-company.entity';

@Injectable()
export class ConstructedPageService extends CrudService<ConstructedPage> {
  constructor(
    @InjectRepository(ConstructedPage)
    private readonly constructedPageRepository: Repository<ConstructedPage>,
    @InjectDataSource() private readonly dataSource: DataSource,
    private readonly constructedBlockService: ConstructedBlockService,
    private readonly constructedMetaInfoService: ConstructedMetaInfoService,
    private readonly constructedPreviewService: ConstructedPreviewService,
    private readonly sitemapService: SitemapService,
  ) {
    super(constructedPageRepository);
  }

  /**
   * Generate Schema.org JSON-LD for blog posts
   */
  private generateBlogSchemaOrg(
    metaInfo: any,
    preview: any,
    company: ConstructedPageCompany,
    postDate: number,
    lastUpdateDate: number,
  ): Record<string, any> {
    const baseUrl = company.blog_base_url || company.company_website_url || '';
    const blogUrl = `${baseUrl}${metaInfo.url ? `/${metaInfo.url}` : ''}`;

    // Get thumbnail from preview photo if available
    let thumbnailUrl = '';
    if (preview?.photo?.file?.url) {
      thumbnailUrl = preview.photo.file.url;
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: metaInfo.meta_tag_title || preview?.headline || '',
      description: metaInfo.meta_tag_description || preview?.description || '',
      author: {
        '@type': 'Organization',
        name: company.company_legal_name || company.name,
      },
      publisher: {
        '@type': 'Organization',
        name: company.company_legal_name || company.name,
        ...(company.company_logo_url && {
          logo: {
            '@type': 'ImageObject',
            url: company.company_logo_url,
          },
        }),
      },
      datePublished: moment.unix(postDate).toISOString(),
      dateModified: moment.unix(lastUpdateDate).toISOString(),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': blogUrl,
      },
    };

    // Add image if available
    if (thumbnailUrl) {
      schema['image'] = thumbnailUrl;
    }

    return schema;
  }

  public async getConstructedPages({
    pagination,
    type,
    is_posted,
    constructed_page_company_id,
  }: GetConstructedPagesArgs) {
    const [items, count] = await this.constructedPageRepository.findAndCount({
      where: {
        is_posted,
        type,
        constructed_page_company_id,
      },
      order: {
        post_date: 'DESC',
        blocks: {
          position_block: 'ASC',
        },
      },
      ...pagination,
    });

    return items;
  }

  /**
   * Get constructed pages with correct pagination handling for one-to-many relationships
   * This method fixes the issue where eager-loaded one-to-many relationships (like blocks)
   * cause duplicate rows in SQL, leading to incorrect pagination.
   *
   * Strategy:
   * 1. First query: Get paginated IDs only (no joins, fast and accurate)
   * 2. Second query: Fetch full entities with all relations using the IDs
   */
  public async getConstructedPagesPaginated({
    pagination,
    type,
    is_posted,
    constructed_page_company_id,
  }: GetConstructedPagesArgs) {
    // Step 1: Get paginated IDs without eager relations
    const queryBuilder = this.constructedPageRepository
      .createQueryBuilder('page')
      .select('page.id', 'page_id')
      .addSelect('MAX(page.post_date)', 'page_post_date')
      .where('1=1'); // Always true condition to start

    if (is_posted !== undefined) {
      queryBuilder.andWhere('page.is_posted = :is_posted', { is_posted });
    }

    if (type) {
      queryBuilder.andWhere('page.type = :type', { type });
    }

    if (constructed_page_company_id) {
      queryBuilder.andWhere(
        'page.constructed_page_company_id = :constructed_page_company_id',
        {
          constructed_page_company_id,
        },
      );
    }

    queryBuilder
      .groupBy('page.id')
      .orderBy('page_post_date', 'DESC')
      .addOrderBy('page.id', 'ASC'); // Secondary sort for deterministic ordering

    // Apply pagination
    if (pagination?.skip !== undefined) {
      queryBuilder.skip(pagination.skip);
    }

    if (pagination?.take !== undefined) {
      queryBuilder.take(pagination.take);
    }

    // Execute to get IDs
    const paginatedResults = await queryBuilder.getRawMany();
    const pageIds = paginatedResults.map((row) => row.page_id);

    // If no results, return empty array
    if (pageIds.length === 0) {
      return [];
    }

    // Step 2: Fetch full entities with all eager relations using the IDs
    // Use query builder with LEFT JOIN to avoid duplicates from eager loading
    const { entities: pages } = await this.constructedPageRepository
      .createQueryBuilder('page')
      .leftJoinAndSelect('page.blocks', 'blocks')
      .leftJoinAndSelect('blocks.photo', 'blockPhoto')
      .leftJoinAndSelect('blockPhoto.file', 'blockPhotoFile')
      .leftJoinAndSelect('page.meta_info', 'metaInfo')
      .leftJoinAndSelect('page.preview', 'preview')
      .leftJoinAndSelect('preview.photo', 'previewPhoto')
      .leftJoinAndSelect('previewPhoto.file', 'previewPhotoFile')
      .leftJoinAndSelect('page.constructed_page_company', 'company')
      .whereInIds(pageIds)
      .orderBy('page.post_date', 'DESC')
      .addOrderBy('page.id', 'ASC') // Secondary sort for deterministic ordering
      .addOrderBy('blocks.position_block', 'ASC')
      .getRawAndEntities();

    // Deduplicate pages (TypeORM getMany() with LEFT JOIN can sometimes return duplicates)
    const pageMap = new Map<string, ConstructedPage>();
    for (const page of pages) {
      if (!pageMap.has(page.id)) {
        pageMap.set(page.id, page);
      }
    }

    // Sort the results to match the original order from step 1
    const sortedPages = pageIds.map((id) => pageMap.get(id)).filter(Boolean);

    return sortedPages;
  }

  public async getConstructedPageById(id: string) {
    return this.constructedPageRepository.findOne({
      where: { id },
      order: { blocks: { position_block: 'ASC' } },
    });
  }

  public async getConstructedPagesCount(filters: {
    type?: ConstructedPageType;
    is_posted?: boolean;
    constructed_page_company_id?: string;
  }): Promise<number> {
    return this.constructedPageRepository.count({
      where: {
        is_posted: filters.is_posted,
        type: filters.type,
        constructed_page_company_id: filters.constructed_page_company_id,
      },
    });
  }

  /**
   * Get count of constructed pages (for use with paginated method)
   */
  public async getConstructedPagesPaginatedCount({
    type,
    is_posted,
    constructed_page_company_id,
  }: Omit<GetConstructedPagesArgs, 'pagination'>): Promise<number> {
    return this.constructedPageRepository.count({
      where: {
        is_posted,
        type,
        constructed_page_company_id,
      },
    });
  }

  public async getConstructedPageByUrl(url: string) {
    return this.constructedPageRepository.findOne({
      where: { meta_info: { url } },
      order: { blocks: { position_block: 'ASC' } },
    });
  }

  public async deleteConstructedPage(id: string) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const constructed_page = await this.findOneById(id);
      if (!constructed_page) {
        throw new GraphQLError('Constructed page not found');
      }

      await this.sitemapService.handlePageSitemap(
        {
          type: constructed_page.type,
          is_posted: false,
          meta_info: {
            url: constructed_page.meta_info.url,
            redirect_url: constructed_page.meta_info.redirect_url,
            state: constructed_page.meta_info.state,
            name: constructed_page.meta_info.name,
          },
          constructed_page_company_id:
            constructed_page.constructed_page_company_id,
        },
        queryRunner,
      );

      await this.deleteById(id);

      await queryRunner.commitTransaction();
      return id;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }

  public async createConstructedPage(
    constructed_page_dto: CreateConstructedPageDto,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const { blocks, meta_info, preview, ...page_dto } = constructed_page_dto;

      const constructed_page = await queryRunner.manager.save(
        ConstructedPage,
        page_dto.is_posted
          ? {
              ...page_dto,
              post_date: moment().unix(),
              last_content_update_unix: moment().unix(),
            }
          : page_dto,
      );

      await this.constructedBlockService.saveManyBlocksTransactional(
        blocks,
        constructed_page.id,
        queryRunner,
      );

      // Get company info for schema.org generation
      const company = await queryRunner.manager.findOne(
        ConstructedPageCompany,
        {
          where: { id: constructed_page.constructed_page_company_id },
        },
      );

      // Auto-generate schema.org for blog posts
      let finalMetaInfo = meta_info;
      if (page_dto.type === ConstructedPageType.BLOG && company) {
        const postDate = constructed_page.post_date || moment().unix();
        const schemaOrg = this.generateBlogSchemaOrg(
          meta_info,
          preview,
          company,
          postDate,
          postDate,
        );

        finalMetaInfo = {
          ...meta_info,
          schema_org: schemaOrg,
        };
      }

      await this.constructedMetaInfoService.createConstructedMetaInfoTransactional(
        finalMetaInfo,
        constructed_page.id,
        queryRunner,
      );

      await this.constructedPreviewService.createConstructedPreviewTransactional(
        preview,
        constructed_page.id,
        queryRunner,
      );

      const created_page = await queryRunner.manager.findOne(ConstructedPage, {
        where: { id: constructed_page.id },
      });

      await this.sitemapService.handlePageSitemap(
        {
          type: created_page.type,
          is_posted: created_page.is_posted,
          meta_info: {
            url: created_page.meta_info.url,
            redirect_url: created_page.meta_info.redirect_url,
            state: created_page.meta_info.state,
            name: created_page.meta_info.name,
          },
          constructed_page_company_id: created_page.constructed_page_company_id,
        },
        queryRunner,
      );

      await queryRunner.commitTransaction();

      return created_page;
    } catch (error) {
      console.log('error', error);
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }

  public async updateConstructedPage(
    update_constructed_page_dto: UpdateConstructedPageDto,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const {
        id,
        blocks,
        preview,
        meta_info,
        delete_blocks_ids,
        ...constructed_page_dto
      } = update_constructed_page_dto;

      const pageUpdates: any = { ...constructed_page_dto };
      let shouldUpdateParentTimestamp = false;
      const now = moment().unix();

      // Get existing page and company info
      const existingPage = await queryRunner.manager.findOne(ConstructedPage, {
        where: { id },
        relations: ['meta_info', 'preview', 'constructed_page_company'],
      });

      if (!existingPage) {
        throw new GraphQLError('Page not found');
      }

      // 1. Update Meta Info
      if (meta_info && Object.keys(meta_info).length) {
        // Auto-regenerate schema.org for blog posts if relevant fields changed
        let finalMetaInfo = meta_info;
        if (
          existingPage.type === ConstructedPageType.BLOG &&
          existingPage.constructed_page_company
        ) {
          const shouldRegenerateSchema =
            meta_info.meta_tag_title ||
            meta_info.meta_tag_description ||
            preview?.headline ||
            preview?.description;

          if (shouldRegenerateSchema) {
            const mergedMetaInfo = { ...existingPage.meta_info, ...meta_info };
            const mergedPreview = preview
              ? { ...existingPage.preview, ...preview }
              : existingPage.preview;

            const schemaOrg = this.generateBlogSchemaOrg(
              mergedMetaInfo,
              mergedPreview,
              existingPage.constructed_page_company,
              existingPage.post_date || now,
              now,
            );

            finalMetaInfo = {
              ...meta_info,
              schema_org: schemaOrg,
            };
          }
        }

        await this.constructedMetaInfoService.updateConstructedMetaInfoTransactional(
          finalMetaInfo,
          id,
          queryRunner,
        );
        shouldUpdateParentTimestamp = true;
      }

      // 2. Update Preview
      if (preview) {
        await this.constructedPreviewService.updateConstructedPreviewTransactional(
          preview,
          id,
          queryRunner,
        );
        shouldUpdateParentTimestamp = true;

        // Regenerate schema.org if preview image changed for blog posts
        if (
          existingPage.type === ConstructedPageType.BLOG &&
          preview.photo &&
          existingPage.constructed_page_company
        ) {
          const mergedPreview = { ...existingPage.preview, ...preview };
          const schemaOrg = this.generateBlogSchemaOrg(
            existingPage.meta_info,
            mergedPreview,
            existingPage.constructed_page_company,
            existingPage.post_date || now,
            now,
          );

          await this.constructedMetaInfoService.updateConstructedMetaInfoTransactional(
            { schema_org: schemaOrg },
            id,
            queryRunner,
          );
        }
      }

      // 3. Update/Create Blocks
      if (blocks && blocks.length) {
        await this.constructedBlockService.updateOrCreateManyBlocksTransactional(
          blocks,
          id,
          queryRunner,
        );
        shouldUpdateParentTimestamp = true;
      }

      // 4. Delete Blocks
      if (delete_blocks_ids && delete_blocks_ids.length) {
        await this.constructedBlockService.deleteManyBlocksTransactional(
          delete_blocks_ids,
          queryRunner,
        );
        shouldUpdateParentTimestamp = true;
      }

      // 5. Update Parent Page Fields and Timestamp
      if (
        Object.keys(constructed_page_dto).length ||
        shouldUpdateParentTimestamp
      ) {
        const updateData = constructed_page_dto.is_posted
          ? { ...constructed_page_dto, post_date: now }
          : constructed_page_dto;

        await queryRunner.manager.update(
          ConstructedPage,
          { id },
          { ...updateData, last_content_update_unix: now },
        );
      }

      const updatedPage = await queryRunner.manager.findOne(ConstructedPage, {
        where: { id },
      });

      await this.sitemapService.handlePageSitemap(
        {
          type: updatedPage.type,
          is_posted: updatedPage.is_posted,
          meta_info: {
            url: updatedPage.meta_info.url,
            redirect_url: updatedPage.meta_info.redirect_url,
            state: updatedPage.meta_info.state,
            name: updatedPage.meta_info.name,
          },
          constructed_page_company_id: updatedPage.constructed_page_company_id,
        },
        queryRunner,
      );

      await queryRunner.commitTransaction();

      return updatedPage;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }
}
