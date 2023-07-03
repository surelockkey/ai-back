import {
  Field,
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { Order } from '../entity/order.entity';
import { OrderKeyDto } from './order-key.dto';

@InputType()
export class OrderInput extends OmitType(Order, ['keys', 'customer']) {}

@InputType()
export class CreateOrderDto extends IntersectionType(
  OmitType(OrderInput, ['id', 'phone', 'address', 'user_id']),
  PartialType(PickType(OrderInput, ['phone', 'address'])),
) {
  @Field(() => [OrderKeyDto], { nullable: true })
  keys?: OrderKeyDto[];
}
