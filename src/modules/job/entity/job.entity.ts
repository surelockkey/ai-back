import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Job extends BaseEntity {
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  uuid: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  start_date: Date;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  end_date: Date;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  created_date: Date;

  @Field(() => Number, { nullable: true })
  @Column('decimal', { nullable: true })
  total_price: number;

  @Field(() => Number, { nullable: true })
  @Column('decimal', { nullable: true })
  amount_due: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  client_id: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  status: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  phone: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  second_phone: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  client_name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  city: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  state: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  postal_code: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_type: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_note: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_source: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  technician_name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  dispatcher_name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  manager_notes: string;

  @Field(() => Number, { nullable: true })
  @Column('decimal', { nullable: true })
  tip_amount: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_timezone: string;

  @Field(() => Number, { nullable: true })
  @Column('decimal', { nullable: true })
  tax_amount: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tax_precent: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_id: string;

  @Field(() => Number, { nullable: true })
  @Column('decimal', { nullable: true })
  avg_duration: number;
}