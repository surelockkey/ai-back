import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedBlock } from './entity/constructed-block.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { ConstructedBlockDto } from './dto/constructed-block.dto';
import { ConstructedPhotoService } from '../constructed-photo/constructed-photo.service';

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
}
