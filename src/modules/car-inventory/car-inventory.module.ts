import { Module } from '@nestjs/common';
import { CarInventoryService } from './car-inventory.service';
import { CarInventoryResolver } from './car-inventory.resolver';
import { WorkizApiModule } from '../api/workiz-api/workiz-api.module';
import { TemplateModule } from './modules/template/template.module';
import { ItemTemplateModule } from './modules/item-template/item-template.module';
import { CarTemplateModule } from './modules/car-template/car-template.module';

@Module({
  imports: [
    WorkizApiModule, 
    TemplateModule,
    ItemTemplateModule,
    CarTemplateModule
  ],
  providers: [
    CarInventoryService, 
    CarInventoryResolver,
  ],
})
export class CarInventoryModule {}
