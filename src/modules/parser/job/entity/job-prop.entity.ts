import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Job } from './job.entity';

@ObjectType()
@Entity()
export class JobProp {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  workiz_id: string;

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
  location_name: string;

  @Field(() => String)
  @Column()
  location_key: string;

  @Field(() => ID)
  @Column('uuid')
  job_id: string;

  @OneToOne(() => Job, (job) => job.prop, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'job_id' })
  job: Job;
}
