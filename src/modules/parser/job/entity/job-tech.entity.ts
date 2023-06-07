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
export class JobTech {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => ID)
  @Column('uuid')
  job_id: string;

  @ManyToOne(() => Job, (job) => job.techs, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @Field(() => String)
  @Column()
  workiz_id: string;

  @Field(() => String)
  @Column()
  isPrimary: string;

  @Field(() => String)
  @Column()
  technition: string;

  @Field(() => String)
  @Column()
  tech_id: string;

  @Field(() => String)
  @Column()
  email_address: string;

  @Field(() => String)
  @Column()
  cell_phone: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  user_address?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  extra_phones?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  user_notes?: string;

  @Field(() => String)
  @Column()
  color_code: string;
}
