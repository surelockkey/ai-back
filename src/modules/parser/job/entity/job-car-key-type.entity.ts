import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JobCustomFields } from './job-custom-fields.entity';

@ObjectType()
@Entity()
export class JobCarKeyType {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column('uuid')
  custom_fields_id: string;

  @OneToOne(
    () => JobCustomFields,
    (job_custom_fields) => job_custom_fields.car_key_type,
  )
  @JoinColumn({ name: 'custom_fields_id' })
  custom_fields: JobCustomFields;

  @Field(() => String)
  @Column()
  car_make: string;

  @Field(() => String)
  @Column()
  car_model: string;

  @Field(() => String)
  @Column()
  car_year: string;

  @Field(() => String)
  @Column()
  key_type: string;
}
