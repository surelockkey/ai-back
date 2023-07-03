import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { ViewEntity, ViewColumn, DataSource, OneToMany } from 'typeorm';
import { CarMake } from './car-make.entity';
import { CarModel } from './car-model.entity';
import { CarYear } from './car-year.entity';
import { KeyCar } from '../../key/key-car/entity/key-car.entity';

@ObjectType()
@ViewEntity({
  name: 'car_view',
  synchronize: true,
  expression: (connection: DataSource) =>
    connection
      .createQueryBuilder()
      .select('car_year.car_year', 'year')
      .addSelect('car_year.id', 'id')
      .addSelect(`"car_model"."car_model"`, 'model')
      .addSelect('car_make.car_make', 'make')
      .from(CarYear, 'car_year')
      .leftJoin(CarModel, 'car_model', 'car_model.id = car_year.model_id')
      .leftJoin(
        CarMake,
        'car_make',
        'car_make.car_make = car_model.car_make_key',
      ),
})
export class Car {
  @Field(() => ID)
  @ViewColumn()
  id: string;

  @Field(() => String)
  @ViewColumn()
  make: string;

  @Field(() => String)
  @ViewColumn()
  model: string;

  @Field(() => Int)
  @ViewColumn()
  year: number;

  @OneToMany(() => KeyCar, (key_car) => key_car.car)
  keys: KeyCar[];
}
