import { InputType, OmitType } from '@nestjs/graphql';
import { OrderKey } from '../entity/order-key.entity';

@InputType()
export class OrderKeyInput extends OmitType(OrderKey, ['key', 'order']) {}

@InputType()
export class OrderKeyDto extends OmitType(OrderKeyInput, ['id', 'order_id']) {}
