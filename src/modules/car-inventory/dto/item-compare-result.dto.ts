import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ItemCompareResult {
  @Field(() => String)
  name: string;

  @Field(() => String)
  sku: string;

  @Field(() => String)
  uhs_sku: string;

  @Field(() => Int)
  actual_quantity: number;

  @Field(() => Int)
  template_quantity: number;

  @Field(() => Int)
  difference: number;
}
