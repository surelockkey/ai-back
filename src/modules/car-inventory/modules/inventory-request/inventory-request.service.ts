import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { InventoryRequest } from './entity/inventory-request.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InventoryRequestService extends CrudService<InventoryRequest> {
  constructor(
    @InjectRepository(InventoryRequest)
    private readonly inventoryRequestRepository: Repository<InventoryRequest>,
  ) {
    super(inventoryRequestRepository);
  }
}
