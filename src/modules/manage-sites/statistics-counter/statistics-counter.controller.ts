import { Controller, Get } from '@nestjs/common';
import { StatisticsCounterService } from './statistics-counter.service';

@Controller('statistics')
export class StatisticsCounterController {
  constructor(
    private readonly statisticsCounterService: StatisticsCounterService,
  ) {}

  @Get('get_statistics')
  getStatistics(): Promise<[number, number, number]> {
    return this.statisticsCounterService.getStatisticsData();
  }
}
