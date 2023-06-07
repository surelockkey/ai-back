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
export class JobItem {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column('uuid')
  our_job_id: string;

  @ManyToOne(() => Job, (job) => job.job_items)
  @JoinColumn({ name: 'our_job_id' })
  job: Job;

  @Field(() => String)
  @Column()
  workiz_id: string;

  @Field(() => String)
  @Column()
  job_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  container_id?: string;

  @Field(() => String)
  @Column()
  jobItemId: string;

  @Field(() => String)
  @Column()
  qty: string;

  @Field(() => String)
  @Column()
  sync: string;

  @Field(() => String)
  @Column()
  jobItemName: string;

  @Field(() => String)
  @Column()
  desc_long: string;

  @Field(() => String)
  @Column()
  total: string;

  @Field(() => String)
  @Column()
  cost: string;

  @Field(() => String)
  @Column()
  price: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  ammount?: string;

  @Field(() => String)
  @Column()
  taxable: string;

  @Field(() => String)
  @Column()
  item_id: string;

  @Field(() => String)
  @Column()
  custom_attributes: string;

  @Field(() => String)
  @Column()
  manage: string;

  @Field(() => String)
  @Column()
  p_id: string;

  @Field(() => String)
  @Column()
  item_name: string;

  @Field(() => String)
  @Column()
  type: string;

  @Field(() => String)
  @Column()
  sort_order: string;

  @Field(() => String)
  @Column()
  is_hidden: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  file_path?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  file_id?: string;
}
