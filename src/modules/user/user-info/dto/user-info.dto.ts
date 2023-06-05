import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { UserInfo } from '../entity/user-info.entity';

@InputType()
export class UserInfoInput extends OmitType(UserInfo, ['user']) {}

@InputType()
export class CreateUserInfoDto extends OmitType(UserInfoInput, ['id']) {}

@InputType()
export class UpdateUserInfoDto extends IntersectionType(
  PickType(UserInfoInput, ['id']),
  PartialType(OmitType(UserInfoInput, ['id', 'user_id'])),
) {}

@InputType()
export class CreateOrUpdateUserInfoDto extends IntersectionType(
  PartialType(PickType(UserInfoInput, ['id'])),
  CreateUserInfoDto,
) {}
