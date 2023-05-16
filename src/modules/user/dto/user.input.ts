import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { User } from '../entity/user.entity';

@InputType()
export class UserInput extends OmitType(User, ['logs']) {}

@InputType()
export class UpdateCurrentUserDto extends PartialType(
  OmitType(UserInput, ['id', 'role', 'email']),
) {}
