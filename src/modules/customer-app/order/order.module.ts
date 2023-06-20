import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { OrderKey } from './entity/order-key.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderKey])],
  providers: [OrderService, OrderResolver],
})
export class OrderModule {}
