import { Module } from '@nestjs/common';
import { LogistInventoryItemService } from './logist-inventory-item.service';
import { LogistInventoryItemResolver } from './logist-inventory-item.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogistInventoryItem } from './entity/logist-inventory-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogistInventoryItem])],
  providers: [LogistInventoryItemService, LogistInventoryItemResolver],
  exports: [LogistInventoryItemService],
})
export class LogistInventoryItemModule {}
