import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Job } from './job.entity';

@ObjectType()
@Entity()
export class JobPayment {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => ID)
  @Column('uuid')
  our_job_id: string;

  @ManyToOne(() => Job, (job) => job.payments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'our_job_id' })
  job: Job;

  @Field(() => String)
  @Column()
  workiz_id: string;

  @Field(() => String)
  @Column()
  payment: string;

  @Field(() => String)
  @Column()
  amount: string;

  @Field(() => String)
  @Column()
  date: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  transaction_id?: string;

  @Field(() => String)
  @Column()
  confirmation: string;

  @Field(() => String)
  @Column()
  charged: string;

  @Field(() => String)
  @Column()
  job_id: string;

  @Field(() => String)
  @Column()
  tip_amount: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  transId?: string;

  @Field(() => String)
  @Column()
  status: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  amount_refunded?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  lastfour?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  gateway?: string;
}
