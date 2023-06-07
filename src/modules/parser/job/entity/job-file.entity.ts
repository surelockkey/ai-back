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
export class JobFile {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column('uuid')
  our_job_id: string;

  @ManyToOne(() => Job, (job) => job.files)
  @JoinColumn({ name: 'our_job_id' })
  job: Job;

  @Field(() => String)
  @Column()
  workiz_id: string;

  @Field(() => String)
  @Column()
  account_id: string;

  @Field(() => String)
  @Column()
  file_path: string;

  @Field(() => String)
  @Column()
  file_type: string;

  @Field(() => String)
  @Column()
  timestamp: string;

  @Field(() => String)
  @Column()
  job_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  last_sent?: string;

  @Field(() => String)
  @Column()
  size: string;

  @Field(() => String)
  @Column()
  remote_server: string;

  @Field(() => String)
  @Column()
  invoice_id: string;

  @Field(() => String)
  @Column()
  file_name: string;

  @Field(() => String)
  @Column()
  is_hidden: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => String)
  @Column()
  estimate_id: string;

  @Field(() => String)
  @Column()
  message_id: string;

  @Field(() => String)
  @Column()
  recipient_type: string;

  @Field(() => String)
  @Column()
  recipient_id: string;

  @Field(() => String)
  @Column()
  item_id: string;

  @Field(() => String)
  @Column()
  is_custom_field: string;

  @Field(() => String)
  @Column()
  is_deleted: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  last_job_id?: string;

  @Field(() => String)
  @Column()
  proposal_template_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  category_identifier?: string;
}
