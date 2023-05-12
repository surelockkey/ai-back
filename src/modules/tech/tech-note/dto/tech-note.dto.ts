import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { TechNote } from '../entity/tech-note.entity';

@InputType()
export class TechNoteInput extends OmitType(TechNote, ['tech']) {}

@InputType()
export class CreateTechNoteDto extends OmitType(TechNoteInput, ['id']) {}

@InputType()
export class UpdateTechNoteDto extends IntersectionType(
  PickType(TechNoteInput, ['id']),
  PartialType(OmitType(TechNoteInput, ['id', 'tech_id'])),
) {}

@InputType()
export class CreateOrUpdateTechNoteDto extends IntersectionType(
  PartialType(PickType(TechNoteInput, ['id'])),
  OmitType(TechNoteInput, ['id']),
) {}
