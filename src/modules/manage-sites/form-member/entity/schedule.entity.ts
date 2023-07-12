import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LocksmithOld } from './locksmith.entity';
import { Request } from './request.entity';
import { Week } from '../../locksmith/locksmith-schedule/enum/week.enum';

@ObjectType()
@Entity('schedule')
export class Schedule {
  @ApiProperty({ type: () => String })
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ApiProperty({ type: () => Week, enum: Week })
  @Field(() => Week)
  @Column({ type: 'enum', enum: Week })
  name: Week;

  @ApiProperty({ type: () => Date, required: false })
  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  open_at?: Date;

  @ApiProperty({ type: () => Date, required: false })
  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  close_at?: Date;

  @Column({ nullable: true })
  request_id?: string;

  @Column({ nullable: true })
  locksmith_id?: string;

  @ManyToOne(() => Request, (request) => request.schedule, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'request_id' })
  request: Request;

  @ManyToOne(() => LocksmithOld, (locksmith) => locksmith.schedule, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'locksmith_id' })
  locksmith: LocksmithOld;
}
