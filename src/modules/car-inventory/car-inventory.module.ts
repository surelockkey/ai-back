import { Module } from '@nestjs/common';
import { CarInventoryService } from './car-inventory.service';
import { CarInventoryResolver } from './car-inventory.resolver';
import { CarInventory } from './entity/car-inventory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTemplateModule } from './item-template/item-template.module';

@Module({
  imports: [TypeOrmModule.forFeature([CarInventory]), ItemTemplateModule],
  providers: [CarInventoryService, CarInventoryResolver],
})
export class CarInventoryModule {}
