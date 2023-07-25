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
  }: GetConstructedPagesArgs) {
    return this.constructedPageRepository.find({
      where: { is_posted, type },
      ...pagination,
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