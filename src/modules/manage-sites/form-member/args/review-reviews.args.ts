import { ArgsType, Field, ID } from '@nestjs/graphql';
import { ReviewsStatus } from '../enum/reviews-status.enum';

@ArgsType()
export class ReviewReviewsType {
  @Field(() => ID)
  id: string;

  @Field(() => ReviewsStatus)
  status: ReviewsStatus;
}
