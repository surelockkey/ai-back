import { Field, ObjectType } from '@nestjs/graphql';
import { LocksmithOld } from '../entity/locksmith.entity';

@ObjectType()
export class LocksmithWithCountNewReviewsDto extends LocksmithOld {
  @Field(() => Number)
  count_new_reviews: number;
}
