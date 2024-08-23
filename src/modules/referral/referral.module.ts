import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Referral } from './entity/referral.entity';
import { ReferralService } from './referral.service';
import { ReferralResolver } from './referral.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Referral])],
  providers: [ReferralService, ReferralResolver],
})
export class ReferralModule {}
