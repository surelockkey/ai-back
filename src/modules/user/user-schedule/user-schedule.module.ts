import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchedule } from './entity/user-schedule.entity';
import { UserScheduleResolver } from './user-schedule.resolver';
import { UserScheduleService } from './user-schedule.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchedule])],
  providers: [UserScheduleService, UserScheduleResolver],
})
export class UserScheduleModule {}
