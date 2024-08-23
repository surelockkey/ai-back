import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReferralService } from './referral.service';
import { Referral } from './entity/referral.entity';
import { CreateReferralDto, ReferralDto } from './dto/referral.dto';

@Resolver()
export class ReferralResolver {
  constructor(private readonly referralService: ReferralService) {}

  @Mutation(() => Referral)
  createReferral(
    @Args('referral', { type: () => CreateReferralDto }) referral: CreateReferralDto,
  ) {
    return this.referralService.createReferral(referral);
  }

  @Query(() => [Referral])
  getAllReferrals() {
    return this.referralService.findAll();
  }
}
