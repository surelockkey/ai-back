import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedBlock } from './entity/constructed-block.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, QueryRunner, Repository } from 'typeorm';
import {
  ConstructedBlockDto,
  UpdateOrCreateConstructedBlockDto,
} from './dto/constructed-block.dto';
import { ConstructedPhotoService } from '../constructed-photo/constructed-photo.service';
import { ConstructedPhotoDto } from '../constructed-photo/dto/constructed-photo.dto';

@Injectable()
export class ConstructedBlockService extends CrudService<ConstructedBlock> {
  constructor(
    @InjectRepository(ConstructedBlock)
    private readonly constructedBlockRepository: Repository<ConstructedBlock>,
    private readonly constructedPhotoService: ConstructedPhotoService,
  ) {
    super(constructedBlockRepository);
  }

  public async saveManyBlocksTransactional(
    blocks: ConstructedBlockDto[],
    constructed_page_id: string,
    queryRunner: QueryRunner,
  ) {
    const blocks_for_save = await Promise.all(
      blocks.map(async (block) => {
        const { photo, ...block_dto } = block;

        let constructed_photo_id;
        if (photo) {
          const constructed_photo =
            await this.constructedPhotoService.createConstructedPhotoTransactional(
              photo,
              queryRunner,
            );

          constructed_photo_id = constructed_photo.id;
        }

        return {
          ...block_dto,
          constructed_photo_id,
          constructed_page_id,
        };
      }),
    );
    return await queryRunner.manager.save(ConstructedBlock, blocks_for_save);
  }

  public async updateOrCreateManyBlocksTransactional(
    blocks: UpdateOrCreateConstructedBlockDto[],
    constructed_page_id: string,
    queryRunner: QueryRunner,
  ) {
    const blocks_for_save = await Promise.all(
      blocks.map(async (block) => {
        const { id, photo, ...block_dto } = block;

        let constructed_photo_id;

        if (id && photo) {
          const exist_block = await this.findOneById(id);

          if (exist_block.constructed_photo_id) {
            await this.constructedPhotoService.updateConstructedPhotoTransactional(
              photo,
              exist_block.constructed_photo_id,
              queryRunner,
            );
          } else {
            const constructed_photo =
              await this.constructedPhotoService.createConstructedPhotoTransactional(
                photo as ConstructedPhotoDto,
                queryRunner,
              );
            constructed_photo_id = constructed_photo.id;
          }
        } else if (!id && photo) {
          const constructed_photo =
            await this.constructedPhotoService.createConstructedPhotoTransactional(
              photo as ConstructedPhotoDto,
              queryRunner,
            );
          constructed_photo_id = constructed_photo.id;
        } else if (id && !photo) {
          const exist_block = await this.findOneById(id);

          if (exist_block.constructed_photo_id) {
            await this.constructedPhotoService.deleteById(exist_block.constructed_photo_id);
          }
        }

        return {
          ...block_dto,
          id,
          constructed_page_id,
          constructed_photo_id,
        };
      }),
    );

    return await queryRunner.manager.save(ConstructedBlock, blocks_for_save);
  }

  public async deleteManyBlocksTransactional(
    blocks_ids: string[],
    queryRunner: QueryRunner,
  ) {
    return await queryRunner.manager.delete(ConstructedBlock, {
      id: In(blocks_ids),
    });
  }
}
