import { Module } from '@nestjs/common';
import { ItemTemplateService } from './item-template.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTemplate } from './entity/item-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemTemplate])],
  providers: [ItemTemplateService],
  exports: [ItemTemplateService],
})
export class ItemTemplateModule {}
