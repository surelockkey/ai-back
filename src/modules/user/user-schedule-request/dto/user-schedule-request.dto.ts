import { Field, ID, InputType, OmitType } from '@nestjs/graphql';
import { UserScheduleRequest } from '../entity/user-schedule-request.entity';

@InputType()
export class UserScheduleRequestInput extends OmitType(UserScheduleRequest, [
  'user',
]) {}

@InputType()
export class CreateOrUpdateUserScheduleRequestDto extends OmitType(
  UserScheduleRequestInput,
  ['id', 'user_id', 'status'],
) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
