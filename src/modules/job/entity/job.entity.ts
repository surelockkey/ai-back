import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Job extends BaseEntity {
  @Field(() => String)
  @Column()
  uuid: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  start_date: Date;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  end_date: Date;

  @Field(() => String)
  @Column()
  created_date: Date;

  @Field(() => Number, { nullable: true })
  @Column('decimal', { nullable: true })
  total_price: number;

  @Field(() => Number, { nullable: true })
  @Column('decimal', { nullable: true })
  amount_due: number;

  @Field(() => Number)
  @Column()
  client_id: number;

  @Field(() => String)
  @Column()
  status: string;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  second_phone: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  email: string;

  @Field(() => String)
  @Column()
  client_name: string;

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
  job_type: string;

  @Field(() => String)
  @Column()
  job_note: string;

  @Field(() => String)
  @Column()
  job_source: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  technician_name: string;

  @Field(() => String)
  @Column()
  dispatcher_name: string;

  @Field(() => String)
  @Column()
  address: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  manager_notes: string;
}