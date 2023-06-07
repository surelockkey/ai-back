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
export class JobChecklistDispatch {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column('uuid')
  custom_fields_id: string;

  @OneToOne(
    () => JobCustomFields,
    (job_custom_fields) => job_custom_fields.checklist_dispatch_,
  )
  @JoinColumn({ name: 'custom_fields_id' })
  custom_fields: JobCustomFields;

  @Field(() => String)
  @Column()
  full_name_1: string;

  @Field(() => String)
  @Column()
  full_address_1: string;

  @Field(() => String)
  @Column()
  full_job_description_1_: string;

  @Field(() => String)
  @Column()
  job_scheduled_1_: string;

  @Field(() => String)
  @Column()
  call_quality_5: string;

  @Field(() => String)
  @Column()
  extra_info: string;

  @Field(() => String)
  @Column()
  total_call_score: string;
}
