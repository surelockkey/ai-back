import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTemplate } from './entity/item-template.entity';
import { ItemTemplateService } from './item-template.service';

@Module({
  imports: [TypeOrmModule.forFeature([ItemTemplate])],
  providers: [ItemTemplateService],
  exports: [ItemTemplateService],
})
export class ItemTemplateModule {}
