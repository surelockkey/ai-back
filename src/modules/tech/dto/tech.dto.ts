import {
  Field,
  InputType,
  IntersectionType,
  ObjectType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { Tech } from '../entity/tech.entity';
import { TechSchedule } from '../tech-schedule/entity/tech-schedule.entity';

@InputType()
export class TechInput extends OmitType(Tech, ['schedules', 'info', 'notes']) {}

@InputType()
export class CreateTechDto extends OmitType(TechInput, ['id']) {}

@InputType()
export class UpdateTechDto extends IntersectionType(
  PickType(TechInput, ['id']),
  PartialType(OmitType(TechInput, ['id'])),
) {}

@ObjectType()
export class TechWithSchedule extends Tech {
  @Field(() => [TechSchedule])
  schedules: TechSchedule[];
}
