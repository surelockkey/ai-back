import { Module } from '@nestjs/common';
import { KeyModule } from './key/key.module';
import { CarModule } from './car/car.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [KeyModule, CarModule, OrderModule],
})
export class CustomerAppModule {}
