import { Field, ID, ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { CarMake } from "./car-make.entity";
import { CarYear } from "./car-year.entity";

@ObjectType()
@Entity("car_model")
@Unique(["car_model", "car_make_key"])
export class CarModel {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @Column()
  car_model: string;

  @Column()
  car_make_key: string;

  @Field(() => CarMake)
  @ManyToOne(() => CarMake, (car_make) => car_make.car_models, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "car_make_key", referencedColumnName: "car_make" })
  car_make: CarMake;

  @OneToMany(() => CarYear, (car_year) => car_year.model)
  car_years: CarYear[];
}
