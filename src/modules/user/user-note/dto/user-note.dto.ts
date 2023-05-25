import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { UserNote } from '../entity/user-note.entity';

@InputType()
export class UserNoteInput extends OmitType(UserNote, ['user']) {}

@InputType()
export class CreateUserNoteDto extends OmitType(UserNoteInput, ['id']) {}

@InputType()
export class UpdateUserNoteDto extends IntersectionType(
  PickType(UserNoteInput, ['id']),
  PartialType(OmitType(UserNoteInput, ['id', 'user_id'])),
) {}

@InputType()
export class CreateOrUpdateUserNoteDto extends IntersectionType(
  PartialType(PickType(UserNoteInput, ['id'])),
  OmitType(UserNoteInput, ['id']),
) {}
