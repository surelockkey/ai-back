import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Job } from './job.entity';

@ObjectType()
@Entity()
export class JobTypeInfo {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column('uuid')
  job_id: string;

  @OneToOne(() => Job, (job) => job.jobTypeInfo, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @Field(() => String)
  @Column()
  workiz_id: string;

  @Field(() => String)
  @Column()
  type_name: string;

  @Field(() => String)
  @Column()
  avg_duration: string;
}
