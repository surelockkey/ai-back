import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { Tech } from '../entity/tech.entity';

@InputType()
export class TechInput extends Tech {}

@InputType()
export class CreateTechDto extends OmitType(TechInput, ['id']) {}

@InputType()
export class UpdateTechDto extends IntersectionType(
  PickType(TechInput, ['id']),
  PartialType(OmitType(TechInput, ['id'])),
) {}
