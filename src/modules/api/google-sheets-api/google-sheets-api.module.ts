import { Module } from '@nestjs/common';
import { GoogleSheetsApiService } from './google-sheets-api.service';
import { GoogleSheetsApiResolver } from './google-sheets-api.resolver';

@Module({
  providers: [GoogleSheetsApiService, GoogleSheetsApiResolver],
})
export class GoogleSheetsApiModule {}
