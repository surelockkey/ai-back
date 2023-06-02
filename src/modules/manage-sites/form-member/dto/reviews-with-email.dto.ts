import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ReviewsStatus } from '../enum/reviews-status.enum';

@ObjectType()
export class ReviewsWithEmailDto {
  @Field(() => ID)
  id: string;

  @Field(() => ReviewsStatus)
  status: ReviewsStatus;

  @Field(() => String)
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  text: string;

  @Field(() => Number, { nullable: true })
  rating?: number;

  @Field(() => String)
  locksmith_id: string;

  @Field(() => Number)
  created_at: number;

  @Field(() => Number)
  updated_at?: number;
}
