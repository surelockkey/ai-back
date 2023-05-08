import { Module } from '@nestjs/common';
import { WorkizApiModule } from './workiz-api/workiz-api.module';
import { GoogleAdsApiModule } from './google-ads-api/google-ads-api.module';
import { GoogleSheetsApiModule } from './google-sheets-api/google-sheets-api.module';
import { CtmApiModule } from './ctm-api/ctm-api.module';

@Module({
  imports: [WorkizApiModule, GoogleAdsApiModule, GoogleSheetsApiModule, CtmApiModule],
})
export class ApiModule {}
