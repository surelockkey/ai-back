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
export class JobDiscount {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => ID)
  @Column('uuid')
  job_id: string;

  @OneToOne(() => Job, (job) => job.discount)
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @Field(() => Boolean)
  @Column('boolean')
  is_percentage: boolean;

  @Field(() => Number)
  @Column('float')
  sum: number;

  @Field(() => Number)
  @Column('float')
  amount: number;

  @Field(() => Number)
  @Column('float')
  percentage: number;

  @Field(() => String)
  @Column()
  display_string: string;
}
