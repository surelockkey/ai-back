import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { GraphQLError } from 'graphql';
// import { ErrorMessage } from 'src/error/error-messages';
// import { UtilsService } from 'src/utils/utils.service';
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import { ConstructorBlogFilterableWithCountDto } from './DTO/BlogCounter/constructor-blog-filterable-count.dto';
import { ChangeBlogPostStatusDto } from './DTO/change-blog-post-status.dto';
import { CreateConstructorBlogDto } from './DTO/create-constructor-blog.dto';
import { FilterableBlogDto } from './DTO/filterable-blog.dto';
import { UpdateConstructorBlogDto } from './DTO/update-constructor-blog.dto';
import { ConstructorBlog } from './Entity/constructor-blog.entity';

@Injectable()
export class ConstructorBlogService {
  constructor(
    @InjectRepository(ConstructorBlog)
    private constructorBlogRepository: Repository<ConstructorBlog>,
    private readonly utilsService: UtilsService,
    @InjectDataSource() private readonly dataSource: DataSource,
  ) {}

  public async getAllBlogs(): Promise<ConstructorBlog[]> {
    return await this.constructorBlogRepository.find({
      order: { blocks: { position_block: 'ASC' } },
    });
  }

  public async getBlogById(id: string): Promise<ConstructorBlog> {
    const blog = await this.constructorBlogRepository.findOne({
      where: { id },
      order: { blocks: { position_block: 'ASC' } },
    });

    if (!blog) {
      throw new GraphQLError(`Cannot get blog by ${id}`);
    }
    return blog;
  }

  public async createBlog(
    createBlog: CreateConstructorBlogDto,
  ): Promise<ConstructorBlog> {
    if (createBlog.blocks && createBlog.blocks.length) {
      createBlog.blocks = await this.utilsService.createOrUpdateArray(
        createBlog.blocks,
        'BlogBlock',
      );
    }
    const created = this.constructorBlogRepository.create(createBlog);
    return await this.constructorBlogRepository.save(created);
  }

  async updateBlog(
    updateBlog: UpdateConstructorBlogDto,
  ): Promise<ConstructorBlog> {
    try {
      if (updateBlog.blocks && updateBlog.blocks.length) {
        updateBlog.blocks = await this.utilsService.createOrUpdateArray(
          updateBlog.blocks,
          'BlogBlock',
        );
      }

      if (updateBlog.preview_info?.photo) {
        if (!updateBlog.preview_info.photo.id) {
          await this.dataSource
            .getRepository('PhotoForBlock')
            .delete({ constructor_blog_id: updateBlog.preview_info.id });
        }
      }
      await this.constructorBlogRepository.save(updateBlog);

      return await this.constructorBlogRepository.findOne({
        where: { id: updateBlog.id },
        order: { blocks: { position_block: 'ASC' } },
      });
    } catch (err) {
      throw new GraphQLError(err);
    }
  }

  public async changeBlogPostStatus(
    changeBlogPostStatusDto: ChangeBlogPostStatusDto,
  ): Promise<ConstructorBlog> {
    return await this.updateBlog(changeBlogPostStatusDto);
  }

  async deleteBlogById(id: string): Promise<ConstructorBlog> {
    const blog = await this.constructorBlogRepository.findOne({
      where: { id },
      order: { blocks: { position_block: 'ASC' } },
    });

    if (!blog) {
      throw new GraphQLError(`Cannot delete blog by ${id}`);
    }
    await this.constructorBlogRepository.delete(id);
    return blog;
  }

  private getBlog(): SelectQueryBuilder<ConstructorBlog> {
    return this.constructorBlogRepository
      .createQueryBuilder('constructor_blog')
      .leftJoinAndSelect('constructor_blog.preview_info', 'preview_info')
      .leftJoinAndSelect('preview_info.photo', 'photo')
      .leftJoinAndSelect('constructor_blog.metaInfo', 'meta_info')
      .leftJoinAndSelect('constructor_blog.blocks', 'blocks')
      .leftJoinAndSelect('blocks.photo', 'blocks_photo')
      .orderBy('blocks.position_block', 'ASC');
  }

  public async getBlogsFilterByMetaBlogUrl(
    metaBlogUrl: string,
  ): Promise<ConstructorBlog> {
    const blog = await this.constructorBlogRepository.findOne({
      where: { metaInfo: { url_for_blog: metaBlogUrl } },
      order: { blocks: { position_block: 'ASC' } },
    });

    if (!blog) {
      throw new GraphQLError(`Blog with url ${metaBlogUrl} not found.`);
    }

    return blog;
  }

  public async getBlogFilterable(
    filter: FilterableBlogDto | null,
  ): Promise<ConstructorBlogFilterableWithCountDto> {
    const getBlog = this.getBlog();

    if (!Object.keys(filter).length) {
      const result = await getBlog.getManyAndCount();
      return {
        blog: result[0],
        blogCount: result[1],
      };
    }

    if (filter.posted) {
      getBlog.andWhere('constructor_blog.is_posted = :posted', {
        posted: filter.posted,
      });
    }
    if (filter.previewInfoTitle) {
      getBlog.andWhere('preview_info.title ILIKE :title', {
        title: `%${filter.previewInfoTitle}%`,
      });
    }

    if (filter.previewInfoDate) {
      getBlog.andWhere('preview_info.date = :date', {
        date: filter.previewInfoDate,
      });
    }

    if (filter.blockDescription) {
      getBlog.andWhere('blocks.description ILIKE :description', {
        description: `%${filter.blockDescription}%`,
      });
    }

    if (filter.metaInfoUrlForBlog) {
      getBlog.andWhere('meta_info.url_for_blog = :url_for_blog', {
        url_for_blog: filter.metaInfoUrlForBlog,
      });
    }
    if (filter.sortField) {
      getBlog.orderBy(
        `${filter.sortField ?? 'constructor_blog.id'}`,
        filter.sortType ? filter.sortType : 'ASC',
      );
    }

    if (filter.limitPaginate) {
      const blogs = await getBlog.getManyAndCount();

      const paginated = await getBlog
        .skip(
          ((filter.pagePaginate ? filter.pagePaginate : 1) - 1) *
            filter.limitPaginate,
        )
        .take(filter.limitPaginate)
        .getMany();

      return {
        blog: paginated,
        blogCount: blogs[1],
      };
    }

    const result = await getBlog
      .addOrderBy('blocks.position_block', 'ASC')
      .getManyAndCount();

    return {
      blog: result[0],
      blogCount: result[1],
    };
  }
}
