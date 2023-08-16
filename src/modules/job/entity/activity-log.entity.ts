import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ActivityLog {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  activity_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  account_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  text: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  uid: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  uname: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  uuid: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  timestamp: string;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  timeInt: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  time: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  searchTerm: string;

  @Field(() => String)
  @Column({ default: 'main' })
  account: string;
}
