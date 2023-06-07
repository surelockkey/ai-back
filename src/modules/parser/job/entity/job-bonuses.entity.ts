import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JobCustomFields } from './job-custom-fields.entity';

@Entity()
@ObjectType()
export class JobBonuses {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column('uuid')
  custom_fields_id: string;

  @OneToOne(
    () => JobCustomFields,
    (job_custom_fields) => job_custom_fields.coordinators_checklist,
  )
  @JoinColumn({ name: 'custom_fields_id' })
  custom_fields: JobCustomFields;

  @Field(() => String)
  @Column()
  jobs_dispatch: string;

  @Field(() => String)
  @Column()
  coordinators_id: string;

  @Field(() => String)
  @Column()
  job_coordinators_: string;
}
