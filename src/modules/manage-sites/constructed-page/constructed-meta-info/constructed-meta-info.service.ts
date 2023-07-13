import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedMetaInfo } from './entity/constructed-meta-info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConstructedMetaInfoService extends CrudService<ConstructedMetaInfo> {
  constructor(
    @InjectRepository(ConstructedMetaInfo)
    private readonly constructedMetaInfoRepository: Repository<ConstructedMetaInfo>,
  ) {
    super(constructedMetaInfoRepository);
  }
}
