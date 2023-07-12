import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ReviewStatus } from '../enum/reviews-status.enum';
import { Locksmith } from '../../entity/locksmith.entity';

@ObjectType()
@Entity()
export class LocksmithReview extends BaseEntity {
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

  @Field(() => ReviewStatus, { nullable: true })
  @Column({
    type: 'enum',
    enum: ReviewStatus,
    default: ReviewStatus.UNDER_CONSIDERATION,
  })
  status: ReviewStatus;

  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'The minimum allowed value is 1' })
  @Max(5, { message: 'The maximum allowed value is 5' })
  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  rating?: number;

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

  @Field(() => String)
  @Column('uuid')
  locksmith_id: string;

  @ManyToOne(() => Locksmith, (locksmith) => locksmith.reviews, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'locksmith_id' })
  locksmith: Locksmith;
}
