import { InputType, OmitType } from '@nestjs/graphql';
import { UserScheduleRequest } from '../entity/user-schedule-request.entity';

@InputType()
export class UserScheduleRequestInput extends OmitType(UserScheduleRequest, [
  'user',
]) {}

@InputType()
export class CreateUserScheduleRequestDto extends OmitType(
  UserScheduleRequestInput,
  ['id', 'user_id'],
) {}
