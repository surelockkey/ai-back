import { Field, Int, ObjectType } from '@nestjs/graphql';
import { LocksmithOld } from '../entity/locksmith.entity';

@ObjectType()
export class LocksmithsWithCount {
  @Field(() => [LocksmithOld])
  items: LocksmithOld[];

  @Field(() => Int)
  count: number;
}
