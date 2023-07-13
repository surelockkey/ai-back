import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedBlock } from './entity/constructed-block.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConstructedBlockService extends CrudService<ConstructedBlock> {
  constructor(
    @InjectRepository(ConstructedBlock)
    private readonly constructedBlockRepository: Repository<ConstructedBlock>,
  ) {
    super(constructedBlockRepository);
  }
}
