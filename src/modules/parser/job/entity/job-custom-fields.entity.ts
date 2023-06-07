import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JobCoordinatorsChecklist } from './job-coordinators-checklist.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { JobBonuses } from './job-bonuses.entity';
import { JobChecklistDispatch } from './job-checklist-dispatch.entity';
import { JobDispatchers } from './job-dispatchers.entity';
import { JobOtherContact } from './job-other-contact.entity';
import { JobCustomFieldTech } from './job-custom-fields-tech.entity';
import { JobCarKeyType } from './job-car-key-type.entity';
import { Job } from './job.entity';

@ObjectType()
@Entity()
export class JobCustomFields {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column('uuid')
  job_id: string;

  @OneToOne(() => Job, (job) => job.custom_fields)
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @Field(() => JobCoordinatorsChecklist)
  @OneToOne(
    () => JobCoordinatorsChecklist,
    (job_coordinators_checklist) => job_coordinators_checklist.custom_fields,
    { eager: true },
  )
  coordinators_checklist: JobCoordinatorsChecklist;

  @Field(() => JobBonuses)
  @OneToOne(() => JobBonuses, (job_bonuses) => job_bonuses.custom_fields, {
    eager: true,
  })
  bonuses_: JobBonuses;

  @Field(() => JobChecklistDispatch)
  @OneToOne(
    () => JobChecklistDispatch,
    (checklist_dispatch) => checklist_dispatch.custom_fields,
    {
      eager: true,
    },
  )
  checklist_dispatch_: JobChecklistDispatch;

  @Field(() => JobDispatchers)
  @OneToOne(() => JobDispatchers, (dispatchers) => dispatchers.custom_fields, {
    eager: true,
  })
  dispatchers: JobDispatchers;

  @Field(() => JobOtherContact)
  @OneToOne(
    () => JobOtherContact,
    (other_contact) => other_contact.custom_fields,
    {
      eager: true,
    },
  )
  other_contact: JobOtherContact;

  @Field(() => JobCustomFieldTech)
  @OneToOne(() => JobCustomFieldTech, (tech) => tech.custom_fields, {
    eager: true,
  })
  tech: JobCustomFieldTech;

  @Field(() => JobCarKeyType)
  @OneToOne(() => JobCarKeyType, (car_key_type) => car_key_type.custom_fields, {
    eager: true,
  })
  car_key_type: JobCarKeyType;
}
