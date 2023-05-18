import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Job extends BaseEntity {
  @Field(() => String)
  @Column()
  workiz_id: string;

  @Field(() => Number)
  @Column('int')
  serial_id: number;

  @Field(() => String, { nullable: true })
  @Column()
  job_date_time: string;

  @Field(() => String, { nullable: true })
  @Column()
  job_end_date_time: string;

  @Field(() => String, { nullable: true })
  @Column()
  created_date: string;

  @Field(() => String, { nullable: true })
  @Column()
  job_total_price: string;

  @Field(() => String, { nullable: true })
  @Column()
  job_amount_due: string;

  @Field(() => String, { nullable: true })
  @Column()
  sub_total: string;

  @Field(() => Number)
  @Column('int')
  client_id: number;

  @Field(() => String)
  @Column()
  status: string;

  @Field(() => String)
  @Column()
  sub_status: string;

  @Field(() => String, { nullable: true })
  @Column()
  payment_due_date: string;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => String)
  @Column()
  second_phone: string;

  @Field(() => String)
  @Column()
  phone_ext: string;

  @Field(() => String)
  @Column()
  second_phone_ext: string;

  @Field(() => String)
  @Column()
  email: string;

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
  company: string;

  @Field(() => String)
  @Column()
  address: string;

  @Field(() => String)
  @Column()
  city: string;

  @Field(() => String)
  @Column()
  state: string;

  @Field(() => String)
  @Column()
  postal_code: string;

  @Field(() => String)
  @Column()
  country: string;

  @Field(() => String)
  @Column()
  unit: string;

  @Field(() => String)
  @Column()
  latitude: string;

  @Field(() => String)
  @Column()
  longitude: string;

  @Field(() => String, { nullable: true })
  @Column()
  job_type: string;

  @Field(() => String, { nullable: true })
  @Column()
  job_notes: string;

  @Field(() => String)
  @Column()
  job_source: string;

  @Field(() => String)
  @Column()
  created_by: string;

  @Field(() => String, { nullable: true })
  @Column()
  last_status_update: string;
}
