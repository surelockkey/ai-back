import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTechFromWorkizDto {
  @Field(() => String)
  workiz_id: string;

  @Field(() => String, { nullable: true })
  state?: string;
}
