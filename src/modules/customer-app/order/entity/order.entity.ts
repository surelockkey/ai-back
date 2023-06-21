import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { ServiceType } from '../enum/service-type.enum';
import { KeyServiceType } from '../enum/key-service-type.enum';
import { OrderKey } from './order-key.entity';
import { User } from 'src/modules/user/entity/user.entity';

@ObjectType()
@Entity()
export class Order extends BaseEntity {
  @Field(() => String)
  @Column()
  address: string;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => String)
  @Column()
  notes: string;

  @Field(() => ID)
  @Column('uuid')
  user_id: string;

  @Field(() => ServiceType)
  @Column({ type: 'enum', enum: ServiceType })
  service_type: ServiceType;

  @Field(() => KeyServiceType)
  @Column({ type: 'enum', enum: KeyServiceType })
  key_service_type: KeyServiceType;

  @Field(() => [OrderKey])
  @OneToMany(() => OrderKey, (order_key) => order_key.order, { eager: true })
  keys: OrderKey;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.orders, { eager: true })
  @JoinColumn({ name: 'user_id' })
  customer: User;
}
