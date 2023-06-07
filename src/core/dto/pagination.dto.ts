import { Type } from '@nestjs/common';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Min, Max } from 'class-validator';

@InputType()
export class FindPaginationDto {
  @Field(() => Int)
  @Min(1)
  @Max(100)
  take: number;

  @Field(() => Int)
  @Min(0)
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
