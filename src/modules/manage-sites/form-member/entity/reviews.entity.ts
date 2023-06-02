import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReviewsStatus } from '../enum/reviews-status.enum';
import { Locksmith } from './locksmith.entity';

@ObjectType()
@Entity('reviews')
export class Reviews {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ select: false })
  email: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  text: string;

  @Field(() => ReviewsStatus, { nullable: true })
  @Column({
    type: 'enum',
    enum: ReviewsStatus,
    default: ReviewsStatus.UNDER_CONSIDERATION,
  })
  status: ReviewsStatus;

  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'The minimum alloved value is 1' })
  @Max(5, { message: 'The maximum alloved value is 5' })
  @Field(() => Number, { nullable: true }) //defaultValue: 5
  @Column({ nullable: true })
  rating?: number;

  @Field(() => String)
  @Column()
  locksmith_id: string;

  @Field(() => Number)
  @CreateDateColumn({
    type: 'bigint',
    default: () => 'EXTRACT(EPOCH FROM NOW())::bigint',
  })
  created_at: number;

  @Field(() => Number)
  @Column({
    nullable: true,
    type: 'bigint',
    default: () => 'EXTRACT(EPOCH FROM NOW())::bigint',
  })
  updated_at?: number;

  @ManyToOne(() => Locksmith, (locksmith) => locksmith.reviews, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'locksmith_id' })
  locksmith: Locksmith;
}
