import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { User } from '../entity/user.entity';

@InputType()
export class UserInput extends OmitType(User, [
  'logs',
  'info',
  'notes',
  'customer_info',
  'orders',
]) {}

@InputType()
export class UpdateCurrentUserDto extends PartialType(
  OmitType(UserInput, ['id', 'role', 'email']),
) {}

@InputType()
export class UpdateUserDto extends PartialType(
  OmitType(UserInput, ['email', 'schedules', 'password']),
) {}
