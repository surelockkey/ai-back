import { Module } from '@nestjs/common';
import { KeyCarService } from './key-car.service';
import { KeyCarResolver } from './key-car.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyCar } from './entity/key-car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KeyCar])],
  providers: [KeyCarService, KeyCarResolver],
  exports: [KeyCarService],
})
export class KeyCarModule {}
