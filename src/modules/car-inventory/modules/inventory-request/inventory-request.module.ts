import { Module } from '@nestjs/common';
import { InventoryRequestResolver } from './inventory-request.resolver';
import { InventoryRequestService } from './inventory-request.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryRequest } from './entity/inventory-request.entity';
import { LogistInventoryItemModule } from './logist-inventory-item/logist-inventory-item.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([InventoryRequest]),
    LogistInventoryItemModule,
  ],
  providers: [InventoryRequestResolver, InventoryRequestService],
})
export class InventoryRequestModule {}
