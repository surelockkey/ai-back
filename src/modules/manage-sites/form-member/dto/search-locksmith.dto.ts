import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class SearchLocksmithDto {
  @Field(() => String, { nullable: true })
  searchValue: string;

  @Field(() => Int, { nullable: true })
  skip: number;

  @Field(() => Int, { nullable: true })
  first: number;
}
