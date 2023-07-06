import { Module } from '@nestjs/common';
import { InventoryRequestResolver } from './inventory-request.resolver';
import { InventoryRequestService } from './inventory-request.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryRequest } from './entity/inventory-request.entity';
import { LogistInventoryItemModule } from './logist-inventory-item/logist-inventory-item.module';
import { InventoryRequestInvoiceModule } from './inventory-request-invoice/inventory-request-invoice.module';
import { TechInventoryItemModule } from './tech-inventory-item/tech-inventory-item.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([InventoryRequest]),
    LogistInventoryItemModule,
    InventoryRequestInvoiceModule,
    TechInventoryItemModule,
  ],
  providers: [InventoryRequestResolver, InventoryRequestService],
})
export class InventoryRequestModule {}
