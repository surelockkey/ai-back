import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { LogistInventoryItem } from './entity/logist-inventory-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LogistInventoryItemService extends CrudService<LogistInventoryItem> {
  constructor(
    @InjectRepository(LogistInventoryItem)
    private readonly logistInventoryItemRepository: Repository<LogistInventoryItem>,
  ) {
    super(logistInventoryItemRepository);
  }
}
