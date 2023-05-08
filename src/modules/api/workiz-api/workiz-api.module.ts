import { Module } from '@nestjs/common';
import { WorkizApiService } from './workiz-api.service';
import { WorkizApiResolver } from './workiz-api.resolver';

@Module({
  providers: [WorkizApiService, WorkizApiResolver],
})
export class WorkizApiModule {}
