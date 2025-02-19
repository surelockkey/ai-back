import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { Technician } from '../entity/technician.entity';

@InputType()
export class TechnicianInput extends OmitType(Technician, [
  'oil_changes',
  'technician_manager',
]) {}

@InputType()
export class CreateTechnicianDto extends OmitType(TechnicianInput, ['id']) {}

@InputType()
export class UpdateTechnicianDto extends IntersectionType(
  PickType(TechnicianInput, ['id']),
  PartialType(OmitType(TechnicianInput, ['id'])),
) {}
