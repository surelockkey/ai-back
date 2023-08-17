import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Job {
  @Field(() => String, { nullable: true })
  @PrimaryGeneratedColumn()
  uuid: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tip_amount: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  is_lead: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  scheduled_start: string; // job_date

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  created_timestamp: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  created: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_date_formatted: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_hour: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_min: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_ampm: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_end_date: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_amount_due_date: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_date_end_formatted: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_hour_end: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_minute_end: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_ampm_end: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  status: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  sub_name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_source: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  status_updated: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  use_tech_special_rate: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tech_special_rate: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tax_amount: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tax_precent: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  taxable_amount: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tax_on_off: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_total_price: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_amount_due: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  sub_total: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  client_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  client_confirmed: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  leadLost: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  has_calls: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  primary_phone: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  secondary_phone: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  email_address: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  company_parts: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  parts: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  client_company_name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  invoice_number: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  city: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  state: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  zipcode: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  location_ob: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  location_pb: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  location_key: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  invoice_created: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  invoice_sent: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  user_created: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  client_first_name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  client_last_name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tech_names: string;

  @Field(() => [String], { nullable: true })
  @Column('text', { array: true })
  tech_phone_numbers: string[];

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  dispatch_bonus_type: string; // custom_fields.bonuses_.jobs

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  dispatch_bonus_number: string; // custom_fields.bonuses_.team_members_

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_type: string; // jobTypeInfo.type_name

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_sub_total: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  created_utc: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  invoice_created_utc: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tags: string;
  // job_items: [],
  // payments: [],
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  paid_total: string;

  @Column({ default: 'main' })
  account: string;

  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // uuid: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // start_date: Date;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // end_date: Date;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // created_date: Date;
  // @Field(() => Number, { nullable: true })
  // @Column('decimal', { nullable: true })
  // total_price: number;
  // @Field(() => Number, { nullable: true })
  // @Column('decimal', { nullable: true })
  // amount_due: number;
  // @Field(() => Number, { nullable: true })
  // @Column({ nullable: true })
  // client_id: number;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // status: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // phone: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // second_phone: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // email: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // client_name: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // city: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // state: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // postal_code: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // job_type: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // job_note: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // job_source: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // technician_name: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // dispatcher_name: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // address: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // manager_notes: string;
  // @Field(() => Number, { nullable: true })
  // @Column('decimal', { nullable: true })
  // tip_amount: number;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // job_timezone: string;
  // @Field(() => Number, { nullable: true })
  // @Column('decimal', { nullable: true })
  // tax_amount: number;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // tax_precent: string;
  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // job_id: string;
  // @Field(() => Number, { nullable: true })
  // @Column('decimal', { nullable: true })
  // avg_duration: number;
  // @Field(() => String)
  // @Column({ default: 'main' })
  // account: string;
}
