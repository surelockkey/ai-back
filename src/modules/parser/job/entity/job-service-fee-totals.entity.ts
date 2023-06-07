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
export class JobServiceFeeTotals {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => ID)
  @Column('uuid')
  job_id: string;

  @OneToOne(() => Job, (job) => job.service_fee_totals, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @Field(() => Number, { nullable: true })
  @Column('float', { nullable: true })
  total: number;

  @Field(() => String)
  @Column()
  display_string: string;
}
