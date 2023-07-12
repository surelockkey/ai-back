import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { LocksmithSchedule } from '../entity/locksmith-schedule.entity';

@InputType()
export class LocksmithScheduleInput extends OmitType(LocksmithSchedule, [
  'locksmith',
]) {}

@InputType()
export class LocksmithScheduleDto extends OmitType(LocksmithScheduleInput, [
  'id',
  'locksmith_id',
]) {}

@InputType()
export class UpdateLocksmithScheduleDto extends IntersectionType(
  PartialType(OmitType(LocksmithScheduleInput, ['id', 'locksmith_id'])),
  PickType(LocksmithScheduleInput, ['id']),
) {}
