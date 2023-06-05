import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateScheduleDto } from './create-schedule.dto';

@InputType('UpdateScheduleDto')
export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
