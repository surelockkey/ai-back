import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { Car } from 'src/modules/customer-app/car/entity/car.entity';
import { Key } from '../../entity/key.entity';
import { BaseEntity } from '@tech-slk/nest-crud';

@Entity('key_car')
@ObjectType()
@Unique(['key_id', 'car_id'])
export class KeyCar extends BaseEntity {
  @Field(() => ID)
  @Column()
  key_id: string;

  @Field(() => ID)
  @Column('uuid')
  car_id: string;

  @ManyToOne(() => Key, (key) => key.cars, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'key_id', referencedColumnName: 'id' })
  key: Key;

  @ManyToOne(() => Car, (car) => car.keys)
  car: Car;
}
