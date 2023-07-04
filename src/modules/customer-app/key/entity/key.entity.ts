import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { File } from '../../../file/entity/file.entity';
import { OrderKey } from '../../order/entity/order-key.entity';
import { KeyCar } from '../key-car/entity/key-car.entity';

@ObjectType()
@Entity()
export class Key extends BaseEntity {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  photo_id?: string;

  @Field(() => File, { nullable: true })
  @OneToOne(() => File, (file) => file.key, { eager: true })
  @JoinColumn({ name: 'photo_id' })
  photo?: File;

  @OneToMany(() => OrderKey, (order_key) => order_key.key)
  orders: OrderKey;

  @Field(() => Number, { nullable: true })
  @Column('float', { nullable: true })
  custom_price?: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  estimate_price?: string;

  @Field(() => [KeyCar], { nullable: true })
  @OneToMany(() => KeyCar, (key_car) => key_car.key)
  cars: KeyCar[];
}
