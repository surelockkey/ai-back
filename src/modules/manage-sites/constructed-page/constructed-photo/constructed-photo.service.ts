import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedPhoto } from './entity/constructed-photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import {
  ConstructedPhotoDto,
  UpdateConstructedPhotoDto,
} from './dto/constructed-photo.dto';
import { FileService } from 'src/modules/file/file.service';

@Injectable()
export class ConstructedPhotoService extends CrudService<ConstructedPhoto> {
  constructor(
    @InjectRepository(ConstructedPhoto)
    private readonly constructedPhotoRepository: Repository<ConstructedPhoto>,
    private readonly fileService: FileService,
  ) {
    super(constructedPhotoRepository);
  }

  public async createConstructedPhotoTransactional(
    photo_dto: ConstructedPhotoDto,
    queryRunner: QueryRunner,
  ) {
    const { file, ...photo } = photo_dto;

    const { id: file_id } = await this.fileService.uploadImageSharp(
      await file,
      queryRunner.manager,
      queryRunner,
    );

    return await queryRunner.manager.save(ConstructedPhoto, {
      ...photo,
      file_id,
    });
  }

  public async updateConstructedPhotoTransactional(
    update_constructed_photo_dto: UpdateConstructedPhotoDto,
    constructed_photo_id: string,
    queryRunner: QueryRunner,
  ) {
    const { file, ...constructed_photo_dto } = update_constructed_photo_dto;

    if (file) {
      const constructed_photo = await this.findOneById(constructed_photo_id);

      await this.fileService.updateImageSharp(
        await file,
        constructed_photo.file_id,
      );
    }

    if (Object.keys(constructed_photo_dto).length) {
      return await queryRunner.manager.update(
        ConstructedPhoto,
        {
          id: constructed_photo_id,
        },
        constructed_photo_dto,
      );
    }
  }
}
