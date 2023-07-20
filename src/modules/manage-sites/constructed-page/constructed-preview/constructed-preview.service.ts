import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedPreview } from './entity/constructed-preview.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { ConstructedPreviewDto } from './dto/constructed-preview.dto';
import { ConstructedPhotoService } from '../constructed-photo/constructed-photo.service';

@Injectable()
export class ConstructedPreviewService extends CrudService<ConstructedPreview> {
  constructor(
    @InjectRepository(ConstructedPreview)
    private readonly constructedPreviewRepository: Repository<ConstructedPreview>,
    private readonly constructedPhotoService: ConstructedPhotoService,
  ) {
    super(constructedPreviewRepository);
  }

  public async createConstructedPreviewTransactional(
    preview_dto: ConstructedPreviewDto,
    constructed_page_id: string,
    queryRunner: QueryRunner,
  ) {
    const { photo, ...preview } = preview_dto;

    let constructed_photo_id;
    if (photo) {
      const constructed_photo =
        await this.constructedPhotoService.createConstructedPhotoTransactional(
          photo,
          queryRunner,
        );
      constructed_photo_id = constructed_photo.id;
    }

    return await queryRunner.manager.save(ConstructedPreview, {
      ...preview,
      constructed_page_id,
      constructed_photo_id,
    });
  }
}
