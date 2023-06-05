import { Field, ObjectType } from '@nestjs/graphql';
import { Locksmith } from '../entity/locksmith.entity';

@ObjectType()
export class LocksmithWithCountNewReviewsDto extends Locksmith {
  @Field(() => Number)
  count_new_reviews: number;
}
