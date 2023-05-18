import { Module } from '@nestjs/common';
import { ItemTemplateService } from './item-template.service';
import { ItemTemplateResolver } from './item-template.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTemplate } from './entity/item-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemTemplate])],
  providers: [ItemTemplateService, ItemTemplateResolver],
})
export class ItemTemplateModule {}
