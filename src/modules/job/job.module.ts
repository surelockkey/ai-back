import { Module } from '@nestjs/common';
import { CtmApiModule } from '../api/ctm-api/ctm-api.module';
import { WorkizApiModule } from '../api/workiz-api/workiz-api.module';
import { JobService } from './job.service';
import { JobResolver } from './job.resolver';

@Module({
  imports: [CtmApiModule, WorkizApiModule],
  providers: [JobService, JobResolver],
})
export class JobModule {}
