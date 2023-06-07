import { Field, ID, InputType } from '@nestjs/graphql';
import { ReviewsStatus } from '../enum/reviews-status.enum';

@InputType('ReviewReviewsDto')
export class ReviewReviewsDto {
  @Field(() => ID)
  id: string;

  @Field(() => ReviewsStatus, {
    defaultValue: ReviewsStatus.UNDER_CONSIDERATION,
  })
  status: ReviewsStatus;
}
