import { Module } from '@nestjs/common';
import { WorkizModule } from './workiz/workiz.module';
import { JobModule } from './job/job.module';

@Module({
  imports: [WorkizModule, JobModule],
})
export class ParserModule {}
