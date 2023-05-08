import { Module } from '@nestjs/common';
import { GoogleAdsApiService } from './google-ads-api.service';

@Module({
  providers: [GoogleAdsApiService],
})
export class GoogleAdsApiModule {}
