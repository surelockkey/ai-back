import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { OrderKey } from './entity/order-key.entity';
import { UserCustomerInfoModule } from 'src/modules/user/user-customer-info/user-customer-info.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderKey]),
    UserCustomerInfoModule,
  ],
  providers: [OrderService, OrderResolver],
})
export class OrderModule {}
