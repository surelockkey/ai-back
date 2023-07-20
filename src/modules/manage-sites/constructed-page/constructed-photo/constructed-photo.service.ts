import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedPhoto } from './entity/constructed-photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { ConstructedPhotoDto } from './dto/constructed-photo.dto';
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

    const { id: file_id } = await this.fileService.uploadImageSharp(await file);

    return await queryRunner.manager.save(ConstructedPhoto, {
      ...photo,
      file_id,
    });
  }
}
