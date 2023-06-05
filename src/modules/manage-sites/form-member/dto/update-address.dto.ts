import { Field, ID, InputType } from '@nestjs/graphql';

@InputType('UpdateAddressDto') // extends PartialType(CreateScheduleDto)
export class UpdateAddressDto {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;
}
