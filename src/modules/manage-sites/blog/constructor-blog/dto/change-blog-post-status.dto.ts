import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ChangeBlogPostStatusDto {
  @Field(() => String)
  id: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  is_posted: boolean;
}
