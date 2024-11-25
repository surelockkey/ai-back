import { Module } from '@nestjs/common';
import { GoogleAdsApiService } from './google-ads-api.service';
import { GoogleAdsApiResolver } from './google-ads-api.resolver';

@Module({
  providers: [GoogleAdsApiService, GoogleAdsApiResolver],
})
export class GoogleAdsApiModule { }
