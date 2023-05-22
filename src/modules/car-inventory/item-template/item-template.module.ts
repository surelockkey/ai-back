import { Module } from '@nestjs/common';
import { ItemTemplateService } from './item-template.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTemplate } from './entity/item-template.entity';
import { ItemTemplateResolver } from './item-template.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ItemTemplate])],
  providers: [ItemTemplateService, ItemTemplateResolver],
  exports: [ItemTemplateService],
})
export class ItemTemplateModule {}
