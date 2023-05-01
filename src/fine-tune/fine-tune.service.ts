import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { FineTune } from './entity/fine-tune.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FineTuneService extends CrudService<FineTune> {
  constructor(
    @InjectRepository(FineTune)
    private readonly fineTuneRepository: Repository<FineTune>,
  ) {
    super(fineTuneRepository);
  }
}
