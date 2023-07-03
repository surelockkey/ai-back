import { Module } from '@nestjs/common';
import { TechInventoryItemService } from './tech-inventory-item.service';
import { TechInventoryItemResolver } from './tech-inventory-item.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechInventoryItem } from './entity/tech-inventory-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TechInventoryItem])],
  providers: [TechInventoryItemService, TechInventoryItemResolver],
})
export class TechInventoryItemModule {}
