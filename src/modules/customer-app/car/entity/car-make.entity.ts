import { Field, ObjectType } from "@nestjs/graphql";
import { Entity, OneToMany, PrimaryColumn, ViewEntity } from "typeorm";
import { CarModel } from "./car-model.entity";

@ObjectType()
@Entity("car_make")
export class CarMake {
  @Field(() => String)
  @PrimaryColumn({ unique: true })
  car_make: string;

  @OneToMany(() => CarModel, (car_model) => car_model.car_make)
  car_models: CarModel[];
}

