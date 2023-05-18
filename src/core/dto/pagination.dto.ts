import { Type } from '@nestjs/common';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class FindPaginationDto {
  @Field(() => Int)
  take: number;

  @Field(() => Int)
  skip: number;
}

export function PaginateResult<T>(ItemType: Type<T>): any {
  @ObjectType({ isAbstract: true })
  abstract class ItemClass {
    @Field(() => [ItemType])
    items: T[];

    @Field(() => Int)
    total: number;
  }

  return ItemClass;
}
