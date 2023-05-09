import { Module } from '@nestjs/common';
import { CtmApiService } from './ctm-api.service';
import { CtmApiResolver } from './ctm-api.resolver';
@Module({
  providers: [CtmApiService, CtmApiResolver],
  exports: [CtmApiService],
})
export class CtmApiModule {}
