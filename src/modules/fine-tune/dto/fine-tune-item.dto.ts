import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { FineTuneItem } from '../entity/fine-tune-item.entity';

@InputType()
export class FineTuneItemInput extends OmitType(FineTuneItem, ['deleted']) {}

@InputType()
export class UpdateFineTuneItemDto extends IntersectionType(
  PickType(FineTuneItemInput, ['id']),
  PartialType(OmitType(FineTuneItemInput, ['id'])),
) {}
