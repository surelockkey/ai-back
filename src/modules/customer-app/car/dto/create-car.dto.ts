import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarDto {
  @Field(() => String)
  make: string;

  @Field(() => String)
  model: string;

  @Field(() => Int)
  year: number;
}
