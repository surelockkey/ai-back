import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { CarModel } from './car-model.entity';

@ObjectType()
@Entity('car_year')
@Unique(['car_year', 'model_id'])
export class CarYear {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Int)
  @Column({ type: 'int' })
  car_year: number;

  @Column({ type: 'uuid' })
  model_id: string;

  @ManyToOne(() => CarModel, (car_model) => car_model.car_years, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'model_id' })
  model: CarModel;
}
