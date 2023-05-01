import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OpenAiFile {
  @Field(() => String)
  object: string;

  @Field(() => String)
  id: string;

  @Field(() => String)
  purpose: string;

  @Field(() => String)
  filename: string;

  @Field(() => String)
  status: string;

  @Field(() => Int)
  bytes: number;

  @Field(() => Int)
  created_at: number;

  status_details: unknown;
}
