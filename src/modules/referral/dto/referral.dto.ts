import { InputType, OmitType } from '@nestjs/graphql';
import { Referral } from '../entity/referral.entity';

@InputType()
export class ReferralDto extends Referral {}

@InputType()
export class CreateReferralDto extends OmitType(ReferralDto, ['id']) {}
