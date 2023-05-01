import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OpenAiMessageResponse {
  @Field(() => String)
  id: string;

  @Field(() => Int)
  created: number;

  @Field(() => String)
  text: string;

  @Field(() => String)
  finish_reason: string;

  @Field(() => Number)
  total_tokens: number;
}
