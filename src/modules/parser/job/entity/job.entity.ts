import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JobProp } from './job-prop.entity';
import { JobCustom } from './job-custom.entity';
import { JobCustomFields } from './job-custom-fields.entity';
import { JobTypeInfo } from './job-type-info.entity';
import { JobFile } from './job-file.entity';
import { JobItem } from './job-item.entity';
import { JobPayment } from './job-payment.entity';
import { JobDiscount } from './job-discount.entity';
import { JobServiceFeeTotals } from './job-service-fee-totals.entity';
import { JobTech } from './job-tech.entity';

@ObjectType()
@Entity()
export class Job {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => Int)
  @Column('int')
  workiz_id: number;

  @Field(() => String)
  @Column()
  uuid: string;

  @Field(() => String)
  @Column()
  recurrence_id: string;

  @Field(() => Int)
  @Column('int')
  estimate_id: number;

  @Field(() => String)
  @Column()
  tip_amount: string;

  @Field(() => String)
  @Column()
  metro_id: string;

  @Field(() => [String])
  @Column('text', { array: true, default: '{}' })
  totalsArray: string[];

  @Field(() => String)
  @Column()
  is_lead: string;

  @Field(() => String)
  @Column()
  account_id: string;

  @Field(() => String)
  @Column()
  account_name: string;

  @Field(() => String)
  @Column()
  job_date: string;

  @Field(() => String)
  @Column()
  created_timestamp: string;

  @Field(() => String)
  @Column()
  created: string;

  @Field(() => String)
  @Column()
  job_date_formatted: string;

  @Field(() => String)
  @Column()
  job_hour: string;

  @Field(() => String)
  @Column()
  job_min: string;

  @Field(() => String)
  @Column()
  job_ampm: string;

  @Field(() => String)
  @Column()
  job_end_date: string;

  @Field(() => String)
  @Column()
  job_amount_due_date: string;

  @Field(() => String)
  @Column()
  job_date_end_formatted: string;

  @Field(() => String)
  @Column()
  job_hour_end: string;

  @Field(() => String)
  @Column()
  job_minute_end: string;

  @Field(() => String)
  @Column()
  job_ampm_end: string;

  @Field(() => String)
  @Column()
  status: string;

  @Field(() => String)
  @Column()
  updated: string;

  @Field(() => String)
  @Column()
  company_id: string;

  @Field(() => String)
  @Column()
  adgroup_id: string;

  @Field(() => String)
  @Column()
  job_serial: string;

  @Field(() => String)
  @Column()
  status_updated: string;

  @Field(() => String)
  @Column()
  seen: string;

  @Field(() => String)
  @Column()
  use_tech_special_rate: string;

  @Field(() => String)
  @Column()
  tech_special_rate: string;

  @Field(() => String)
  @Column()
  job_local_time: string;

  @Field(() => String)
  @Column()
  job_timezone: string;

  @Field(() => String)
  @Column()
  dispatch_id: string;

  @Field(() => String)
  @Column()
  tax_amount: string;

  @Field(() => String)
  @Column()
  tax_precent: string;

  @Field(() => String)
  @Column()
  taxable_amount: string;

  @Field(() => String)
  @Column()
  tax_on_off: string;

  @Field(() => String)
  @Column()
  job_total_price: string;

  @Field(() => String)
  @Column()
  job_amount_due: string;

  @Field(() => String)
  @Column()
  sub_total: string;

  @Field(() => String)
  @Column()
  external_special_rate: string;

  @Field(() => String)
  @Column()
  use_external_special_rate: string;

  @Field(() => String)
  @Column()
  client_id: string;

  @Field(() => String)
  @Column()
  sub_status_id: string;

  @Field(() => String)
  @Column()
  last_sent: string;

  @Field(() => String)
  @Column()
  last_progress: string;

  @Field(() => String)
  @Column()
  client_confirmed: string;

  @Field(() => String)
  @Column()
  leadLost: string;

  @Field(() => String)
  @Column()
  converted: string;

  @Field(() => String)
  @Column()
  is_stub: string;

  @Field(() => String)
  @Column()
  tax_ref_id: string;

  @Field(() => String)
  @Column()
  prop_id: string;

  @Field(() => String)
  @Column()
  is_parent_recurrence: string;

  @Field(() => String)
  @Column()
  recurrence_interval: string;

  @Field(() => String)
  @Column()
  recurrence_subsequence: string;

  @Field(() => String)
  @Column()
  has_calls: string;

  @Field(() => String)
  @Column()
  schedule_type: string;

  @Field(() => String)
  @Column()
  utc_updated: string;

  @Field(() => String)
  @Column()
  is_deleted: string;

  @Field(() => String)
  @Column()
  servicePlanId: string;

  @Field(() => String)
  @Column()
  job_id: string;

  @Field(() => String)
  @Column()
  primary_phone: string;

  @Field(() => String)
  @Column()
  secondary_phone: string;

  @Field(() => String)
  @Column()
  primary_ext: string;

  @Field(() => String)
  @Column()
  secondary_ext: string;

  @Field(() => String)
  @Column()
  job_type: string;

  @Field(() => String)
  @Column()
  email_address: string;

  @Field(() => String)
  @Column()
  comments: string;

  @Field(() => String)
  @Column()
  first_name: string;

  @Field(() => String)
  @Column()
  last_name: string;

  @Field(() => String)
  @Column()
  company_parts: string;

  @Field(() => String)
  @Column()
  parts: string;

  @Field(() => String)
  @Column()
  set_price: string;

  @Field(() => String)
  @Column()
  client_company_name: string;

  @Field(() => String)
  @Column()
  invoice_number: string;

  @Field(() => String)
  @Column()
  sub_name: string;

  @Field(() => String)
  @Column()
  sub_parent: string;

  @Field(() => String)
  @Column()
  city: string;

  @Field(() => String)
  @Column()
  state: string;

  @Field(() => String)
  @Column()
  zipcode: string;

  @Field(() => String)
  @Column()
  address: string;

  @Field(() => String)
  @Column()
  country: string;

  @Field(() => String)
  @Column()
  location_ob: string;

  @Field(() => String)
  @Column()
  location_pb: string;

  @Field(() => String)
  @Column()
  unit: string;

  @Field(() => String)
  @Column()
  location_key: string;

  @Field(() => String)
  @Column()
  location_name: string;

  @Field(() => String)
  @Column()
  billing_location_key: string;

  @Field(() => String)
  @Column()
  type_name: string;

  @Field(() => String)
  @Column()
  avg_duration: string;

  @Field(() => String)
  @Column()
  job_source: string;

  @Field(() => String)
  @Column()
  invoice_id: string;

  @Field(() => String)
  @Column()
  invoice_created: string;

  @Field(() => String)
  @Column()
  invoice_sent: string;

  @Field(() => String)
  @Column()
  InvoiceNotes: string;

  @Field(() => String)
  @Column()
  invoice_id_interval: string;

  @Field(() => String)
  @Column()
  user_created: string;

  @Field(() => String)
  @Column()
  client_first_name: string;

  @Field(() => String)
  @Column()
  client_last_name: string;

  @Field(() => String)
  @Column()
  client_email_address: string;

  @Field(() => String)
  @Column()
  client_phone_number: string;

  @Field(() => String)
  @Column()
  client_hash: string;

  @Field(() => String)
  @Column()
  payment_client_id: string;

  @Field(() => String)
  @Column()
  client_client_company_name: string;

  @Field(() => String)
  @Column()
  tech_list: string;

  @Field(() => String)
  @Column()
  tech_names: string;

  @Field(() => [String])
  @Column('text', { array: true, default: '{}' })
  tech_emails: string[];

  @Field(() => [String])
  @Column('text', { array: true, default: '{}' })
  tech_phone_numbers: string[];

  @Field(() => JobProp)
  @OneToOne(() => JobProp, (job_prop) => job_prop.job, { eager: true })
  prop: JobProp;

  @Field(() => JobCustom)
  @OneToOne(() => JobCustom, (job_custom) => job_custom.job, { eager: true })
  custom: JobCustom;

  @Field(() => JobCustomFields)
  @OneToOne(
    () => JobCustomFields,
    (job_custom_fields) => job_custom_fields.job,
    { eager: true },
  )
  custom_fields: JobCustomFields;

  @Field(() => JobTypeInfo)
  @OneToOne(() => JobTypeInfo, (job_type_info) => job_type_info.job, {
    eager: true,
  })
  jobTypeInfo: JobTypeInfo;

  @Field(() => String)
  @Column()
  job_sub_total: string;

  @Field(() => String)
  @Column()
  created_utc: string;

  @Field(() => String)
  @Column()
  job_date_utc: string;

  @Field(() => String)
  @Column()
  job_end_date_utc: string;

  @Field(() => String)
  @Column()
  job_amount_due_date_utc: string;

  @Field(() => String)
  @Column()
  invoice_created_utc: string;

  @Field(() => [JobFile])
  @OneToMany(() => JobFile, (job_file) => job_file.job, { eager: true })
  files: JobFile[];

  @Field(() => String)
  @Column()
  job_description: string;

  @Field(() => String)
  @Column()
  jobTitle: string;

  @Field(() => String)
  @Column()
  invoiceId: string;

  @Field(() => String)
  @Column()
  jobDate: string;

  @Field(() => String)
  @Column()
  jobEndDate: string;

  @Field(() => String)
  @Column()
  jobTime: string;

  @Field(() => String)
  @Column()
  jobEndTime: string;

  @Field(() => String)
  @Column()
  schedule: string;

  @Field(() => String)
  @Column()
  invoiceTimestamp: string;

  @Field(() => String)
  @Column()
  fullName: string;

  @Field(() => String)
  @Column()
  phoneNumber: string;

  @Field(() => String)
  @Column()
  secondaryPhone: string;

  @Field(() => String)
  @Column()
  cityStateZip: string;

  @Field(() => String)
  @Column()
  location_key_br: string;

  @Field(() => String)
  @Column()
  balanceDueOn: string;

  @Field(() => String)
  @Column()
  addressOnly: string;

  @Field(() => String)
  @Column()
  tags: string;

  @Field(() => [String])
  @Column('text', { array: true, default: '{}' })
  client_tags: any[];

  @Field(() => [JobItem])
  @OneToMany(() => JobItem, (job_item) => job_item.job, { eager: true })
  job_items: JobItem[];

  @Field(() => [JobPayment])
  @OneToMany(() => JobPayment, (payment) => payment.job, { eager: true })
  payments: JobPayment[];

  @Field(() => JobDiscount)
  @OneToOne(() => JobDiscount, (job_discount) => job_discount.job, {
    eager: true,
  })
  discount: JobDiscount;

  @Field(() => JobServiceFeeTotals)
  @OneToOne(
    () => JobServiceFeeTotals,
    (job_service_fee_totals) => job_service_fee_totals.job,
    { eager: true },
  )
  service_fee_totals?: JobServiceFeeTotals;

  @Field(() => String)
  @Column()
  due_date_formatted: string;

  @Field(() => String)
  @Column()
  optional_total: string;

  @Field(() => String)
  @Column()
  paid_total: string;

  @Field(() => String)
  @Column()
  _id: string;

  @Field(() => [JobTech])
  @OneToMany(() => JobTech, (job_tech) => job_tech.job, { eager: true })
  techs: JobTech[];
}
