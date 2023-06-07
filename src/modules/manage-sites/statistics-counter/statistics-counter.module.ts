import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { StatisticsCounterController } from './statistics-counter.controller';
import { StatisticsCounterService } from './statistics-counter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatisticsCounter } from './entity/statistic-counter.entity';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([StatisticsCounter]),
  ],
  controllers: [StatisticsCounterController],
  providers: [StatisticsCounterService],
})
export class StatisticsCounterModule {}
