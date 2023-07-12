import { InputType, OmitType } from '@nestjs/graphql';
import { LocksmithReview } from '../entity/locksmith-review.entity';

@InputType()
export class LocksmithReviewInput extends OmitType(LocksmithReview, [
  'locksmith',
]) {}
