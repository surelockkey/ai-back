import { Field, ID, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Job } from './job.entity';

@ObjectType()
@Entity('job_custom')
export class JobCustom {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f1?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f2?: string;

  @Field(() => String)
  @Column()
  f5: string;

  @Field(() => String)
  @Column()
  f6: string;

  @Field(() => String)
  @Column()
  f7: string;

  @Field(() => String)
  @Column()
  f8: string;

  @Field(() => String)
  @Column()
  f17: string;

  @Field(() => String)
  @Column()
  f18: string;

  @Field(() => String)
  @Column()
  f19: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f20?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column('json', { nullable: true })
  f22?: JSON;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column('json', { nullable: true })
  f23?: JSON;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column('json', { nullable: true })
  f24?: JSON;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column('json', { nullable: true })
  f25?: JSON;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column('json', { nullable: true })
  f26?: JSON;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f27?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f28?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f29?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f30?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f31?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f32?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f33?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f34?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f35?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f36?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f37?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f38?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f39?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f40?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f41?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f42?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  f43?: string;

  @Field(() => ID)
  @Column('uuid')
  job_id: string;

  @OneToOne(() => Job, (job) => job.custom)
  @JoinColumn({ name: 'job_id' })
  job: Job;
}
