import { Module } from '@nestjs/common';
import { InventoryRequestInvoiceService } from './inventory-request-invoice.service';
import { InventoryRequestInvoiceResolver } from './inventory-request-invoice.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryRequestInvoice } from './entity/inventory-request-invoice.entity';
import { TechInventoryItemModule } from '../tech-inventory-item/tech-inventory-item.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([InventoryRequestInvoice]),
    TechInventoryItemModule,
  ],
  providers: [InventoryRequestInvoiceService, InventoryRequestInvoiceResolver],
  exports: [InventoryRequestInvoiceService],
})
export class InventoryRequestInvoiceModule {}
