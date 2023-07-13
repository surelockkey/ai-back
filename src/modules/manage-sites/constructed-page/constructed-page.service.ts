import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedPage } from './entity/constructed-page.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConstructedPageService extends CrudService<ConstructedPage> {
  constructor(
    @InjectRepository(ConstructedPage)
    private readonly constructedPageRepository: Repository<ConstructedPage>,
  ) {
    super(constructedPageRepository);
  }
}
