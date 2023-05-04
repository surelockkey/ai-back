import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OpenAiFineTune {
  @Field(() => String)
  id: string;

  @Field(() => String)
  model: string;

  @Field(() => String, { nullable: true })
  fine_tuned_model?: string;

  @Field(() => String)
  status: string;

  @Field(() => Int)
  created_at: number;

  @Field(() => Int)
  updated_at: number;

  @Field(() => [OpenAiFineTuneEvent])
  events: OpenAiFineTuneEvent[];
}

@ObjectType()
export class OpenAiFineTuneEvent {
  @Field(() => String)
  level: string;

  @Field(() => String)
  message: string;

  @Field(() => Int)
  created_at: number;
}
