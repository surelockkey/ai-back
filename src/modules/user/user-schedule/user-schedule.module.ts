import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchedule } from './entity/user-schedule.entity';
import { UserScheduleResolver } from './user-schedule.resolver';
import { UserScheduleService } from './user-schedule.service';
import { TimeTemplateModule } from './time-template/time-template.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchedule]), TimeTemplateModule],
  providers: [UserScheduleService, UserScheduleResolver],
})
export class UserScheduleModule {}
