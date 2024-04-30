import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedPage } from './entity/constructed-page.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import {
  CreateConstructedPageDto,
  UpdateConstructedPageDto,
} from './dto/constructed-page.dto';
import { GraphQLError } from 'graphql';
import { ConstructedBlockService } from './constructed-block/constructed-block.service';
import { ConstructedMetaInfoService } from './constructed-meta-info/constructed-meta-info.service';
import { ConstructedPreviewService } from './constructed-preview/constructed-preview.service';
import { GetConstructedPagesArgs } from './args/get-constructed-pages.args';

@Injectable()
export class ConstructedPageService extends CrudService<ConstructedPage> {
  constructor(
    @InjectRepository(ConstructedPage)
    private readonly constructedPageRepository: Repository<ConstructedPage>,
    @InjectDataSource() private readonly dataSource: DataSource,
    private readonly constructedBlockService: ConstructedBlockService,
    private readonly constructedMetaInfoService: ConstructedMetaInfoService,
    private readonly constructedPreviewService: ConstructedPreviewService,
  ) {
    super(constructedPageRepository);
  }

  public async getConstructedPages({
    pagination,
    type,
    is_posted,
    constructed_page_company_id,
  }: GetConstructedPagesArgs) {
    // const [items, count] = await this.constructedPageRepository.findAndCount({
    //   where: {
    //     is_posted,
    //     type,
    //     constructed_page_company_id,
    //   },
    //   order: {
    //     post_date: 'DESC',
    //     blocks: {
    //       position_block: 'ASC',
    //     },
    //   },
    //   ...pagination,
    // });

    return await this.constructedPageRepository
      .createQueryBuilder('constructed_page')
      .leftJoinAndSelect(
        'constructed_page.constructed_page_company',
        'constructed_page_company',
      )
      .leftJoinAndSelect('constructed_page.meta_info', 'meta_info')
      .leftJoinAndSelect('constructed_page.blocks', 'constructed_block')
      .leftJoinAndSelect('constructed_block.photo', 'constructed_block_photo')
      .leftJoinAndSelect(
        'constructed_block_photo.file',
        'constructed_block_photo_file',
      )
      .leftJoinAndSelect('constructed_page.preview', 'constructed_page_preview')
      .leftJoinAndSelect(
        'constructed_page_preview.photo',
        'constructed_page_preview_photo',
      )
      .leftJoinAndSelect(
        'constructed_page_preview_photo.file',
        'constructed_page_preview_photo_file',
      )
      .where({
        is_posted,
        type,
        constructed_page_company_id,
      })
      .orderBy('constructed_page.post_date', 'DESC')
      .addOrderBy('constructed_block.position_block', 'ASC')
      .skip(pagination.skip)
      .take(pagination.take)
      .getMany();

    // return items;
  }

  public async getConstructedPageById(id: string) {
    return this.constructedPageRepository.findOne({
      where: { id },
      order: { blocks: { position_block: 'ASC' } },
    });
  }

  public async getConstructedPageByUrl(url: string) {
    return this.constructedPageRepository.findOne({
      where: { meta_info: { url } },
      order: { blocks: { position_block: 'ASC' } },
    });
  }

  public async createConstructedPage(
    constructed_page_dto: CreateConstructedPageDto,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();

    try {
      const { blocks, meta_info, preview, ...page_dto } = constructed_page_dto;

      const constructed_page = await queryRunner.manager.save(
        ConstructedPage,
        page_dto,
      );

      await this.constructedBlockService.saveManyBlocksTransactional(
        blocks,
        constructed_page.id,
        queryRunner,
      );

      await this.constructedMetaInfoService.createConstructedMetaInfoTransactional(
        meta_info,
        constructed_page.id,
        queryRunner,
      );

      await this.constructedPreviewService.createConstructedPreviewTransactional(
        preview,
        constructed_page.id,
        queryRunner,
      );

      await queryRunner.commitTransaction();

      return await this.findOneById(constructed_page.id);
    } catch (error) {
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

      if (meta_info && Object.keys(meta_info).length) {
        await this.constructedMetaInfoService.updateConstructedMetaInfoTransactional(
          meta_info,
          id,
          queryRunner,
        );
      }

      if (preview) {
        await this.constructedPreviewService.updateConstructedPreviewTransactional(
          preview,
          id,
          queryRunner,
        );
      }

      if (blocks && blocks.length) {
        await this.constructedBlockService.updateOrCreateManyBlocksTransactional(
          blocks,
          id,
          queryRunner,
        );
      }

      if (delete_blocks_ids && delete_blocks_ids.length) {
        await this.constructedBlockService.deleteManyBlocksTransactional(
          delete_blocks_ids,
          queryRunner,
        );
      }

      if (Object.keys(constructed_page_dto).length) {
        await queryRunner.manager.update(
          ConstructedPage,
          {
            id,
          },
          constructed_page_dto,
        );
      }

      await queryRunner.commitTransaction();

      return this.findOneById(id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }
}
