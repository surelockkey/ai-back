import { Module } from '@nestjs/common';
import { InventoryRequestInvoiceService } from './inventory-request-invoice.service';
import { InventoryRequestInvoiceResolver } from './inventory-request-invoice.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryRequestInvoice } from './entity/inventory-request-invoice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryRequestInvoice])],
  providers: [InventoryRequestInvoiceService, InventoryRequestInvoiceResolver],
})
export class InventoryRequestInvoiceModule {}
