import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Call {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  call_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  call_sid: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  created: Date;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  from: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  to: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  recording_url: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  from_zip: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  to_zip: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  call_duration: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  call_status: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  direction: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  is_active: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  client_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  ad_group_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  phoneNumber: string;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  timeInt: number;

  @Field(() => String)
  @Column({ default: 'main' })
  account: string;
}
