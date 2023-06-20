import { Field, ID, InputType, OmitType } from '@nestjs/graphql';
import { Order } from '../entity/order.entity';
import { OrderKeyDto } from './order-key.dto';

@InputType()
export class OrderInput extends OmitType(Order, ['keys']) {}

@InputType()
export class CreateOrderDto extends OmitType(OrderInput, ['id']) {
  @Field(() => [OrderKeyDto], { nullable: true })
  keys?: OrderKeyDto[];
}
