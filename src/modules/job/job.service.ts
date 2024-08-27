import { Injectable } from '@nestjs/common';
import { WorkizApiService } from '../api/workiz-api/workiz-api.service';
import { Job } from './entity/job.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { PaginatedJobDto } from '../api/workiz-api/dto/workiz-api.dto';
import { WorkizCoreApiService } from '../api/workiz-api/workiz-core.service';
import * as moment from 'moment';
// import { Call } from './entity/call.entity';
import { ActivityLog } from './entity/activity-log.entity';
import { workizJobToTableJob } from './utils/job-transformet.util';
import { Commission } from './interface/commision.interface';
import { SystemSettingsService } from '../system-settings/system-settings.service';
import fs from 'fs';
import { CountieService } from './countie/countie.service';
import { CallService } from './call/call.service';

import * as _ from 'lodash';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job) private readonly jobRepository: Repository<Job>,
    private readonly workizApiService: WorkizApiService,
    private readonly workizCoreApiService: WorkizCoreApiService,
    @InjectRepository(ActivityLog)
    private readonly activityLogRepository: Repository<ActivityLog>,
    private readonly systemSettingService: SystemSettingsService,
    private readonly countieService: CountieService,
    private readonly callService: CallService,
  ) {}

  public async jobLoop(
    from_year = 18,
    from_month = 1,
    account?: 'main' | 'arizona',
  ) {
    const current_date = moment();
    let year = from_year;
    let month = from_month;

    const currentYear = moment().format('YY'); // Get the current year in 2-digit format
    const currentMonth = moment().format('M');

    while (
      Number(currentYear) > year ||
      (Number(currentYear) === year && Number(currentMonth) >= month)
    ) {
      await this.getJob(year, month, account);

      month++;

      if (month > 12) {
        month = 1;
        year += 1;
      }

      console.log('Jobs M: ', month, 'Y: ', year);
    }
  }

  public async getJob(
    year: number,
    month: number,
    account?: 'main' | 'arizona',
  ): Promise<PaginatedJobDto> {
    let current_page = 0;
    let total_pages_data = await this.getJobsByRange(
      current_page,
      year,
      month,
      account,
    )
      .catch((e) => console.log(e))
      .then((r) => r);

    console.log('total_pages: ', total_pages_data.total);
    console.log(process.memoryUsage().heapUsed);

    if (total_pages_data) {
      const total_pages = total_pages_data?.pages;
      while (current_page < total_pages) {
        let req = await this.getJobsByRange(current_page, year, month, account);

        if (req && req.aaData) {
          let jobs: any[] = req.aaData;

          await Promise.all(
            jobs.map(async (job) => {
              await this.jobRepository.save({ uuid: job.uuid, account });
              await this.getFullJob(job.uuid, account);
            }),
          );

          jobs = null;
        }
        req = null;

        console.log(current_page);
        current_page++;
      }
    }

    total_pages_data = null;

    return { items: [], has_more: true };
  }

  private async getFullJob(job_id: string, account?: 'main' | 'arizona') {
    try {
      let job = await this.workizCoreApiService
        .req(`/ajaxc/job/get/${job_id}/`, 'post', undefined, account)
        .catch((e) => {
          console.log(job_id, 'error', e);
        });

      if (job.data) {
        console.log(job_id, 'not job data');

        let countie = await this.countieService.findOneWithoutError({
          city: job?.data?.city,
          state: job?.data?.state,
        });
        await this.jobRepository.save({
          ...workizJobToTableJob(job, account),
          county: countie ? countie.county : 'n/a',
        });
        countie = null;
      }

      job = null;

      return;
    } catch (e) {
      console.log('getFullJob', e);
    }
  }

  private async getJobsByRange(
    current_page: number,
    year: number,
    month: number,
    account?: 'main' | 'arizona',
  ) {
    let month_to = month + 1;
    let year_to = year;

    if (month === 12) {
      month_to = 1;
      year_to = year + 1;
    }
    try {
      console.log(`1.${month}.${year}_1.${month_to}.${year_to}`);

      return await this.workizCoreApiService.req(
        '/ajaxc/job/jobReport/',
        'post',
        {
          page: current_page,
          pageSize: 500,
          sorted: [{ id: 'created', desc: true }],
          filtered: [],
          sSearch: '',
          final_q: `1.${month}.${year}_1.${month_to}.${year_to}`,
          timeQueryChanged: false,
          pickerParams: { report_by: 3 },
          react: true,
          withCsv: false,
          pickerOn: true,
          filters: {
            user: [],
            tag: [],
            metro: [],
            type: [],
            status: [],
            created_by: [],
            source: [],
            company: [],
          },
        },
        account,
      );
    } catch (e) {
      console.log(
        'getJobsByRange error',
        `1.${month}.${year}_1.${month_to}.${year_to}`,
        e,
      );
    }
  }

  public async commissionsLoop(
    from_year = 18,
    from_month = 1,
    account?: 'main' | 'arizona',
  ) {
    const all_commissions: Commission[] = [];

    let year = from_year;
    let month = from_month;

    const currentYear = moment().format('YY'); // Get the current year in 2-digit format
    const currentMonth = moment().format('M');

    while (
      (Number(currentYear) > year ||
        (Number(currentYear) === year && Number(currentMonth) >= month)) &&
      (year < Number(currentYear) ||
        (year === Number(currentYear) && month <= Number(currentMonth)))
    ) {
      const commmissions: Commission[] = await this.getCommission(
        year,
        month,
        account,
      );
      all_commissions.push(...commmissions);

      console.log(`M: ${month} Y: ${year} com: ${commmissions.length}`);

      month++;

      if (month > 12) {
        month = 1;
        year += 1;
      }
    }

    all_commissions.forEach(async (com) => {
      await this.jobRepository.save({ uuid: com.uuid, account, ...com });
    });

    console.log(all_commissions.length);
  }

  public async getCommission(
    year: number,
    month: number,
    account?: 'main' | 'arizona',
  ) {
    const commissions = await this.workizCoreApiService
      .getAllCommissions(month, year, account)
      .catch((e) => {
        console.log('commission err', e);
      });

    if (commissions) {
      commissions.shift();

      return commissions.map((item) => {
        return {
          uuid: item.job_id.substring(12, 18), // add replace all
          total_sales: parseFloat(item.total.replace(new RegExp(',', 'g'), '')),
          cash: parseFloat(item.cash.replace(new RegExp(',', 'g'), '')),
          credit: parseFloat(item.credit.replace(new RegExp(',', 'g'), '')),
          billing: parseFloat(item.billing.replace(new RegExp(',', 'g'), '')),
          check: parseFloat(item.check.replace(new RegExp(',', 'g'), '')),
          tech_share: item.tech_share,
          tech_parts: parseFloat(item.parts.replace(new RegExp(',', 'g'), '')),
          company_parts: parseFloat(
            item.company_parts.replace(new RegExp(',', 'g'), ''),
          ),
          tech_profit: parseFloat(
            item.tech_profit.replace(new RegExp(',', 'g'), ''),
          ),
          company_profit: parseFloat(
            item.company_profit.replace(new RegExp(',', 'g'), ''),
          ),
          tax: parseFloat(item.tax.replace(new RegExp(',', 'g'), '')),
        };
      });
    } else {
      return [];
    }
  }

  public async startUpdateJobsInfo(
    from_year = 18,
    from_month = 1,
    account?: 'main' | 'arizona',
  ) {
    await this.systemSettingService.updateByCriteriaAndReturnOne(
      {},
      { is_parsing: true },
    );
    console.log('PARSING JOBS');
    await this.jobLoop(from_year, from_month, account);
    console.log('PARSING COMMISSION');
    await this.commissionsLoop(from_year, from_month, account);
    for (let i = 0; i < 5; i++) {
      await this.getUnsavedJobs();
    }
    await this.systemSettingService.updateByCriteriaAndReturnOne(
      {},
      { is_parsing: false },
    );
    console.log('PARSING CALLS');
    await this.callService.parseCalls(from_month, from_year, account);
    console.log('SETTING CALL FLOWS');
    await this.setJobsCallFlow();
    console.log('FINISH');
  }

  public async setJobsCallFlow() {
    const jobs = await this.jobRepository.find();
    // let count = 1;

    for (const job of jobs) {
      const call = await this.callService.firstJobCall(job.uuid);

      if (call && call.flow_name) {
        await this.jobRepository.update(
          { uuid: job.uuid },
          { call_flow: call.flow_name },
        );
        // console.log(`${count}/${jobs.length}`);
      } else {
        await this.jobRepository.update(
          { uuid: job.uuid },
          { call_flow: null },
        );
        // console.log(`${count}/${jobs.length} NOT FOUND`);
      }
      // count++;
    }
  }

  public async getUnsavedJobs() {
    const unsaved_jobs = await this.jobRepository.find({
      where: { created_date: IsNull(), total_sales: Not(IsNull()) },
    });

    console.log('Getting unsaved jobs ', unsaved_jobs.length);

    for (const job of unsaved_jobs) {
      await this.getFullJob(job.uuid, job.account as 'main' | 'arizona');
    }

    console.log('Finish get unsaved jobs');
  }

  @Cron('0 0 9 * * *', {
    timeZone: 'Europe/Kiev',
  })
  async reParseJobEveryDay() {
    if (process.env.ENVIROMENT !== 'prod') {
      const date = new Date();
      const month = date.getMonth() + 1;
      const year = parseInt(date.getFullYear().toString().slice(-2));

      await this.startUpdateJobsInfo(year, month, 'main');
      await this.startUpdateJobsInfo(year, month, 'arizona');
    }
  }
}
