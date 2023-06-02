import { Cron } from '@nestjs/schedule';
import { Injectable } from '@nestjs/common';
import { StatisticsCounter } from './entity/statistic-counter.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatisticsCounterService {
  constructor(
    @InjectRepository(StatisticsCounter)
    private statisticsCounterRepository: Repository<StatisticsCounter>,
  ) {}

  private openProjects: number;
  private customerServed: number;
  private emergencyCalls: number;

  @Cron('0 10 2 * * *') //! maybe this period should be 10 2 * * *
  async counter(): Promise<string> {
    try {
      const data = await this.statisticsCounterRepository.find();

      if (new Date().getMonth() === 0 && new Date().getDate() === 1) {
        this.openProjects = this.randomInt(0, 2);
        this.emergencyCalls = this.randomInt(24, 32);
        this.customerServed = this.randomInt(10, 18);
      } else {
        this.openProjects =
          (data.length ? data[0].last_open_projects : 0) + this.randomInt(0, 2);
        this.customerServed =
          (data.length ? data[0].last_customers_served : 0) +
          this.randomInt(24, 32);
        this.emergencyCalls =
          (data.length ? data[0].last_emergency_calls : 0) +
          this.randomInt(10, 18);
      }

      await this.statisticsCounterRepository.delete(data[0].id);
      const created = this.statisticsCounterRepository.create({
        last_open_projects: this.openProjects,
        last_customers_served: this.customerServed,
        last_emergency_calls: this.emergencyCalls,
      });
      await this.statisticsCounterRepository.save(created);
    } catch (error) {
      return error;
    }
  }

  async getStatisticsData(): Promise<[number, number, number]> {
    const data = await this.statisticsCounterRepository.find();

    const projects = data.length ? data[0].last_open_projects : 0;
    const customers = data.length ? data[0].last_customers_served : 0;
    const calls = data.length ? data[0].last_emergency_calls : 0;
    return [projects, customers, calls];
  }

  randomInt(min: number, max: number): number {
    return min + Math.floor((max - min) * Math.random());
  }
}
