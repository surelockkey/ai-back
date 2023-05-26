import { InputType, OmitType } from '@nestjs/graphql';
import { TimeTemplate } from '../entity/time-template.entity';

@InputType()
export class TimeTemplateInput extends TimeTemplate {}

@InputType()
export class CreateTimeTemplateDto extends OmitType(TimeTemplateInput, [
  'id',
]) {}
