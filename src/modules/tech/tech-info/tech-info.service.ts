import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { TechInfo } from './entity/tech-info.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TechInfoService extends CrudService<TechInfo> {
  constructor(
    @InjectRepository(TechInfo)
    private readonly techInfoRepository: Repository<TechInfo>,
  ) {
    super(techInfoRepository);
  }
}
