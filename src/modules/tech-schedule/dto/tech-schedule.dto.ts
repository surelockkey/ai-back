import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { TechSchedule } from '../entity/tech-schedule.entity';

@InputType()
export class TechScheduleInput extends TechSchedule {}

@InputType()
export class CreateTechScheduleDto extends OmitType(TechScheduleInput, [
  'id',
]) {}

@InputType()
export class UpdateTechScheduleDto extends IntersectionType(
  PickType(TechScheduleInput, ['id']),
  PartialType(OmitType(CreateTechScheduleDto, ['tech_id'])),
) {}
