import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { TimeTemplate } from './entity/time-template.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TimeTemplateService extends CrudService<TimeTemplate> {
  constructor(
    @InjectRepository(TimeTemplate)
    private readonly timeTemplateRepository: Repository<TimeTemplate>,
  ) {
    super(timeTemplateRepository);
  }
}
