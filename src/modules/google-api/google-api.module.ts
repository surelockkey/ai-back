import { Module } from '@nestjs/common';
import { GoogleApiService } from './google-api.service';
import { GoogleApiResolver } from './google-api.resolver';

@Module({
  providers: [GoogleApiService, GoogleApiResolver],
})
export class GoogleApiModule {}
