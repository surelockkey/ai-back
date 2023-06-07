import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JobCustomFields } from './job-custom-fields.entity';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
@Entity()
export class JobCustomFieldTech {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column('uuid')
  custom_fields_id: string;

  @OneToOne(
    () => JobCustomFields,
    (job_custom_fields) => job_custom_fields.tech,
  )
  @JoinColumn({ name: 'custom_fields_id' })
  custom_fields: JobCustomFields;

  @Field(() => GraphQLJSON)
  @Column('json')
  check_image_front: any;

  @Field(() => GraphQLJSON)
  @Column('json')
  check_image_back: any;

  @Field(() => String)
  @Column()
  tech_parts_cost_: string;

  @Field(() => String)
  @Column()
  company_parts_cost_: string;

  @Field(() => GraphQLJSON)
  @Column('json')
  parts_image_: any;

  @Field(() => GraphQLJSON)
  @Column('json')
  after_job_image_: any;

  @Field(() => GraphQLJSON)
  @Column('json')
  before_job_image: any;
}
