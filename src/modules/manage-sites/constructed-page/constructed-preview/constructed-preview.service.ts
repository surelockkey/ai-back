import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedPreview } from './entity/constructed-preview.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConstructedPreviewService extends CrudService<ConstructedPreview> {
  constructor(
    @InjectRepository(ConstructedPreview)
    private readonly constructedPreviewRepository: Repository<ConstructedPreview>,
  ) {
    super(constructedPreviewRepository);
  }
}
