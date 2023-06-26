import { Module } from '@nestjs/common';
import { UserScheduleRequestService } from './user-schedule-request.service';
import { UserScheduleRequestResolver } from './user-schedule-request.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserScheduleRequest } from './entity/user-schedule-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserScheduleRequest])],
  providers: [UserScheduleRequestService, UserScheduleRequestResolver],
})
export class UserScheduleRequestModule {}
