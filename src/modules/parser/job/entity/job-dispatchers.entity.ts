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
export class JobDispatchers {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column('uuid')
  custom_fields_id: string;

  @OneToOne(
    () => JobCustomFields,
    (job_custom_fields) => job_custom_fields.dispatchers,
  )
  @JoinColumn({ name: 'custom_fields_id' })
  custom_fields: JobCustomFields;

  @Field(() => String)
  @Column()
  payment_type: string;

  @Field(() => String)
  @Column()
  manager_note: string;
}
