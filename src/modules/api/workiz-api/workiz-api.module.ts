import { Module } from '@nestjs/common';
import { WorkizApiService } from './workiz-api.service';

@Module({
  providers: [WorkizApiService],
})
export class WorkizApiModule {}
