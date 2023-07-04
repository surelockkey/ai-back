import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarResolver } from './car.resolver';
import { CarService } from './car.service';
import { CarMake } from './entity/car-make.entity';
import { CarModel } from './entity/car-model.entity';
import { CarYear } from './entity/car-year.entity';
import { Car } from './entity/car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarMake, CarModel, CarYear, Car])],
  providers: [CarResolver, CarService],
  exports: [CarService],
})
export class CarModule {}
