import { Module } from '@nestjs/common';
import { LocksmithScheduleService } from './locksmith-schedule.service';
import { LocksmithScheduleResolver } from './locksmith-schedule.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocksmithSchedule } from './entity/locksmith-schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocksmithSchedule])],
  providers: [LocksmithScheduleService, LocksmithScheduleResolver],
  exports: [LocksmithScheduleService],
})
export class LocksmithScheduleModule {}
