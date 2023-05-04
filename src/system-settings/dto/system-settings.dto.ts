import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { SystemSettings } from '../entity/system-settings.entity';

@InputType()
export class SystemSettingsInput extends SystemSettings {}

@InputType()
export class UpdateSystemSettingsDto extends OmitType(SystemSettingsInput, [
  'active_model',
  'id',
]) {}
