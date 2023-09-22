import { Module } from '@nestjs/common';
import { CtmApiModule } from '../api/ctm-api/ctm-api.module';
import { WorkizApiModule } from '../api/workiz-api/workiz-api.module';
import { JobService } from './job.service';
import { JobResolver } from './job.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entity/job.entity';
import { Call } from './entity/call.entity';
import { ActivityLog } from './entity/activity-log.entity';
import { SystemSettingsModule } from '../system-settings/system-settings.module';
import { CountieModule } from './countie/countie.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Job, Call, ActivityLog]),
    CtmApiModule,
    WorkizApiModule,
    SystemSettingsModule,
    CountieModule,
  ],
  providers: [JobService, JobResolver],
})
export class JobModule {}
