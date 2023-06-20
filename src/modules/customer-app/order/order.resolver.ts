import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';
import { Order } from './entity/order.entity';

@Resolver()
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Order)
  createOrder(
    @Args('order_dto', { type: () => CreateOrderDto })
    order_dto: CreateOrderDto,
  ) {
    return this.orderService.createOrder(order_dto);
  }
}
