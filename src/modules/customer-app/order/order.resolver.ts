import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';
import { Order } from './entity/order.entity';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from 'src/modules/authorization/dto/current-user.dto';

@Resolver()
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @RoleGuard(UserRole.CUSTOMER)
  @Mutation(() => Order)
  createOrder(
    @Args('order_dto', { type: () => CreateOrderDto })
    order_dto: CreateOrderDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.orderService.createOrder(order_dto, user_id);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER, UserRole.DISPATCHER)
  @Query(() => [Order])
  getAllOrders() {
    return this.orderService.findAll();
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER, UserRole.DISPATCHER)
  @Query(() => Order)
  getOrderById(@Args('id', { type: () => ID }) id: string) {
    return this.orderService.findOneById(id);
  }

  @RoleGuard(UserRole.CUSTOMER)
  @Query(() => [Order])
  getMyOrders(@CurrentUser() { user_id }: CurrentUserDto) {
    return this.orderService.findAll({ user_id });
  }
}
