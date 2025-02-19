import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { TechnicianManager } from '../entity/technician-manager.entity';

@InputType()
export class TechnicianManagerInput extends OmitType(TechnicianManager, [
  'technicians',
]) {}

@InputType()
export class CreateTechnicianManagerDto extends OmitType(
  TechnicianManagerInput,
  ['id'],
) {}

@InputType()
export class UpdateTechnicianManagerDto extends IntersectionType(
  PickType(TechnicianManagerInput, ['id']),
  PartialType(OmitType(TechnicianManagerInput, ['id'])),
) {}
