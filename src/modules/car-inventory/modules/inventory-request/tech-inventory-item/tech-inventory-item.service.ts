import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { TechInventoryItem } from './entity/tech-inventory-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, QueryRunner, Repository } from 'typeorm';

@Injectable()
export class TechInventoryItemService extends CrudService<TechInventoryItem> {
  constructor(
    @InjectRepository(TechInventoryItem)
    private readonly techInventoryItemRepository: Repository<TechInventoryItem>,
  ) {
    super(techInventoryItemRepository);
  }

  public async saveManyTechItemsTransactional(
    tech_items: DeepPartial<TechInventoryItem>[],
    queryRunner: QueryRunner,
  ) {
    return queryRunner.manager.save(TechInventoryItem, tech_items);
  }
}
