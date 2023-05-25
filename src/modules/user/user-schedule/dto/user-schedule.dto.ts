import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { UserSchedule } from '../entity/user-schedule.entity';

@InputType()
export class UserScheduleInput extends UserSchedule {}

@InputType()
export class CreateUserScheduleDto extends OmitType(UserScheduleInput, [
  'id',
]) {}

@InputType()
export class UpdateUserScheduleDto extends IntersectionType(
  PickType(UserScheduleInput, ['id']),
  PartialType(OmitType(CreateUserScheduleDto, ['user_id'])),
) {}

