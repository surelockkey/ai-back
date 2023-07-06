import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { LogistInventoryItem } from './entity/logist-inventory-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { LogistInventoryItemDto } from './dto/logist-inventory-item.dto';

@Injectable()
export class LogistInventoryItemService extends CrudService<LogistInventoryItem> {
  constructor(
    @InjectRepository(LogistInventoryItem)
    private readonly logistInventoryItemRepository: Repository<LogistInventoryItem>,
  ) {
    super(logistInventoryItemRepository);
  }

  public async createManyLogistItemsTransactional(
    logist_items: LogistInventoryItemDto[],
    inventory_request_id: string,
    queryRunner: QueryRunner,
  ) {
    return await queryRunner.manager.save(
      LogistInventoryItem,
      logist_items.map((item) => ({ ...item, inventory_request_id })),
    );
  }
}
