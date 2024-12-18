import { Module } from '@nestjs/common';
import { GoogleAdsApiService } from './google-ads-api.service';
import { GoogleAdsApiResolver } from './google-ads-api.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdCampaign } from './entity/ad-campaign.entity';
import { AdGroup } from './entity/ad-group.entity';
import { AdPage } from './entity/ad-page.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdCampaign, AdGroup, AdPage])],
  providers: [GoogleAdsApiService, GoogleAdsApiResolver],
})
export class GoogleAdsApiModule { }
