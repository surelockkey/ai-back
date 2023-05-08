import { Module } from '@nestjs/common';
import { GoogleSheetsApiService } from './google-sheets-api.service';

@Module({
  providers: [GoogleSheetsApiService]
})
export class GoogleSheetsApiModule {}
