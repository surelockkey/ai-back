import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { TechInfo } from '../entity/tech-info.entity';

@InputType()
export class TechInfoInput extends OmitType(TechInfo, ['tech']) {}

@InputType()
export class CreateTechInfoDto extends OmitType(TechInfoInput, ['id']) {}

@InputType()
export class UpdateTechInfoDto extends IntersectionType(
  PickType(TechInfoInput, ['id']),
  PartialType(OmitType(TechInfoInput, ['id'])),
) {}
