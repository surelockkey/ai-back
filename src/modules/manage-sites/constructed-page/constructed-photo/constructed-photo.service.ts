import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedPhoto } from './entity/constructed-photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConstructedPhotoService extends CrudService<ConstructedPhoto> {
  constructor(
    @InjectRepository(ConstructedPhoto)
    private readonly constructedPhotoRepository: Repository<ConstructedPhoto>,
  ) {
    super(constructedPhotoRepository);
  }
}
