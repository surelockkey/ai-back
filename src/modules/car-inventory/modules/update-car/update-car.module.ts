import { Module } from '@nestjs/common';
import { UpdateCarService } from './update-car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpdateCarRequest } from './entity/update-car.entity';
import { WorkizApiModule } from 'src/modules/api/workiz-api/workiz-api.module';
import { CarTemplateModule } from '../car-template/car-template.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UpdateCarRequest]),
    WorkizApiModule,
    CarTemplateModule,
  ],
  providers: [
    UpdateCarService
  ],
  exports: [
    UpdateCarService,
  ]
})
export class UpdateCarModule {}
