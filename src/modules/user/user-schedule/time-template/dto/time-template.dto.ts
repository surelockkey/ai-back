import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { TimeTemplate } from '../entity/time-template.entity';

@InputType()
export class TimeTemplateInput extends TimeTemplate {}

@InputType()
export class CreateTimeTemplateDto extends OmitType(TimeTemplateInput, [
  'id',
]) {}

@InputType()
export class UpdateTimeTemplateDto extends IntersectionType(
  PickType(TimeTemplateInput, ['id']),
  PartialType(CreateTimeTemplateDto),
) {}
