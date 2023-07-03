import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { InventoryRequestInvoice } from './entity/inventory-request-invoice.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InventoryRequestInvoiceService extends CrudService<InventoryRequestInvoice> {
  constructor(
    @InjectRepository(InventoryRequestInvoice)
    private readonly inventoryRequestInvoiceRepository: Repository<InventoryRequestInvoice>,
  ) {
    super(inventoryRequestInvoiceRepository);
  }
}
