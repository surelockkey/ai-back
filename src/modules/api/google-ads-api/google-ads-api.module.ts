import { Module } from '@nestjs/common';
import { GoogleAdsApiService } from './google-ads-api.service';
import { GoogleAdsApiResolver } from './google-ads-api.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdCampaign } from './entity/ad-campaign';

@Module({
  imports: [TypeOrmModule.forFeature([AdCampaign])],

  providers: [GoogleAdsApiService, GoogleAdsApiResolver],
})
export class GoogleAdsApiModule { }
