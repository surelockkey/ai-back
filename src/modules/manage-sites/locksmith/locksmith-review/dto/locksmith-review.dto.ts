import {
  Field,
  InputType,
  ObjectType,
  OmitType,
  PickType,
} from '@nestjs/graphql';
import { LocksmithReview } from '../entity/locksmith-review.entity';
import { IsEmail } from 'class-validator';

@InputType()
export class LocksmithReviewInput extends OmitType(LocksmithReview, [
  'locksmith',
  'created_at',
  'updated_at',
]) {}

@InputType()
export class RequestLocksmithReviewDto extends OmitType(LocksmithReviewInput, [
  'id',
  'status',
]) {
  @IsEmail()
  @Field(() => String)
  email: string;
}

@InputType()
export class ReviewLocksmithReviewDto extends PickType(LocksmithReviewInput, [
  'id',
  'status',
]) {}

@ObjectType()
export class LocksmithReviewWithEmail extends LocksmithReview {
  @Field(() => String)
  email: string;
}
