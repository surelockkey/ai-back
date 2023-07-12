import { Resolver } from '@nestjs/graphql';
import { InventoryRequestInvoiceService } from './inventory-request-invoice.service';
import { InventoryRequestInvoiceDto } from './dto/inventory-request-invoice.dto';
import { FileService } from 'src/modules/file/file.service';
import { QueryRunner } from 'typeorm';

@Resolver()
export class InventoryRequestInvoiceResolver {
  constructor(
    private readonly inventoryRequestInvoiceService: InventoryRequestInvoiceService,
  ) {}
}
