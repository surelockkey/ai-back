import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Locksmith } from '../entity/locksmith.entity';

@ObjectType()
export class LocksmithsWithCount {
  @Field(() => [Locksmith])
  items: Locksmith[];

  @Field(() => Int)
  count: number;
}
