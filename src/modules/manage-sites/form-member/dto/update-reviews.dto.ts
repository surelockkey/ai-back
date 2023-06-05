import { Field, ID, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { CreateReviewsDto } from './create-reviews.dto';

@InputType()
export class UpdateReviewsDto extends PartialType(
  OmitType(CreateReviewsDto, ['email', 'locksmith_id']),
) {
  @Field(() => ID)
  id: string;
}
