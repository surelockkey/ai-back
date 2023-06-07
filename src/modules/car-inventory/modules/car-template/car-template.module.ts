import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarTemplateService } from './car-template.service';
import { CarTemplate } from './entity/car-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarTemplate])],
  providers: [CarTemplateService],
  exports: [CarTemplateService],
})
export class CarTemplateModule {}
