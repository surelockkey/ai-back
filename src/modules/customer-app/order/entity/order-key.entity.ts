import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { Key } from '../../key/entity/key.entity';

@ObjectType()
@Entity()
export class OrderKey extends BaseEntity {
  @Field(() => ID)
  @Column('uuid')
  order_id: string;

  @Field(() => ID)
  @Column('uuid')
  key_id: string;

  @Field(() => Int, { nullable: true })
  @Column('int', { default: 1 })
  count: number;

  @ManyToOne(() => Order, (order) => order.keys)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Field(() => Key)
  @ManyToOne(() => Key, (key) => key.orders)
  @JoinColumn({ name: 'key_id' })
  key: Key;
}
