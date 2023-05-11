import { Module } from '@nestjs/common';
import { TechScheduleService } from './tech-schedule.service';
import { TechScheduleResolver } from './tech-schedule.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechSchedule } from './entity/tech-schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TechSchedule])],
  providers: [TechScheduleService, TechScheduleResolver],
})
export class TechScheduleModule {}
