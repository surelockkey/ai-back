import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { TechInventoryItem } from './entity/tech-inventory-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TechInventoryItemService extends CrudService<TechInventoryItem> {
  constructor(
    @InjectRepository(TechInventoryItem)
    private readonly techInventoryItemRepository: Repository<TechInventoryItem>,
  ) {
    super(techInventoryItemRepository);
  }
}
