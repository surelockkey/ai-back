import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { UserCustomerInfo } from '../entity/user-customer-info.entity';

@InputType()
export class UserCustomerInfoInput extends OmitType(UserCustomerInfo, [
  'user',
]) {}

@InputType()
export class UserCustomerInfoDto extends OmitType(UserCustomerInfoInput, [
  'id',
  'user_id',
]) {}

@InputType()
export class UpdateUserCustomerInfoDto extends IntersectionType(
  PickType(UserCustomerInfoInput, ['id']),
  PartialType(OmitType(UserCustomerInfoInput, ['id', 'user_id'])),
) {}
