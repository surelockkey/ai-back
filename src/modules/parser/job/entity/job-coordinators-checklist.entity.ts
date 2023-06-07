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
export class JobCoordinatorsChecklist {
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
  check_job_source: string;

  @Field(() => String)
  @Column()
  job_notes: string;

  @Field(() => String)
  @Column()
  job_payment_: string;

  @Field(() => String)
  @Column()
  job_items_: string;

  @Field(() => String)
  @Column()
  files_checks_c_t_item_picture_: string;

  @Field(() => String)
  @Column()
  job_end_date: string;
}
