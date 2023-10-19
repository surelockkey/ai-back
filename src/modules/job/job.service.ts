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

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job) private readonly jobRepository: Repository<Job>,
    private readonly workizApiService: WorkizApiService,
    private readonly workizCoreApiService: WorkizCoreApiService,
    // @InjectRepository(Call) private readonly callRepository: Repository<Call>,
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
    // await this.jobRepository.delete({ account: 'arizona' });

    // await this.callRepository.delete({ account: 'arizona' });

    // await this.activityLogRepository.delete({ account: 'arizona' });

    const current_date = moment();
    let year = from_year;
    let month = from_month;

    while (
      !(
        Number(current_date.format('YY')) <= year &&
        Number(current_date.format('M')) < month
      )
    ) {
      await this.getJob(year, month, account);

      month++;

      if (month > 12) {
        month = 1;
        year += 1;
      }

      console.log(month, year);
    }
  }

  public async getJob(
    year: number,
    month: number,
    account?: 'main' | 'arizona',
  ): Promise<PaginatedJobDto> {
    let current_page = 0;
    const total_pages_data = await this.getJobsByRange(
      current_page,
      year,
      month,
      account,
    )
      .catch((e) => console.log(e))
      .then((r) => r);

    console.log('total_pages: ', total_pages_data);
    const total_pages = total_pages_data.pages;

    while (current_page < total_pages) {
      const req = await this.getJobsByRange(current_page, year, month, account);

      if (req && req.aaData) {
        const jobs = req.aaData;
        // for (const job of jobs) {
        //   await this.getFullJob(job.uuid, account);
        // }

        const chunked_jobs = _.chunk(jobs, 100);
        let i = 0;

        for (const jobs_chunk of chunked_jobs) {
          await Promise.all(
            jobs_chunk.map(
              async (job) => await this.getFullJob(job.uuid, account),
            ),
          );

          console.log(i);

          i++;
        }
      }

      current_page++;
    }

    return { items: [], has_more: true };
  }

  private async getJobsByRange(
    current_page: number,
    year: number,
    month: number,
    account?: 'main' | 'arizona',
  ) {
    try {
      let month_to = month + 1;
      let year_to = year;

      if (month === 12) {
        month_to = 1;
        year_to = year + 1;
      }

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
      console.log(e);
    }
  }

  private async getFullJob(job_id: string, account?: 'main' | 'arizona') {
    try {
      const job = await this.workizCoreApiService.req(
        `/ajaxc/job/get/${job_id}/`,
        'post',
        undefined,
        account,
      );

      if (job.data) {
        const countie = await this.countieService.findOneWithoutError({
          city: job?.data?.city,
          state: job?.data?.state,
        });
        await this.jobRepository.save({
          ...workizJobToTableJob(job, account),
          county: countie ? countie.county : 'n/a',
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  public async commissionsLoop(
    from_year = 18,
    from_month = 1,
    account?: 'main' | 'arizona',
  ) {
    const all_commissions: Commission[] = [];
    const current_date = moment();
    let year = from_year;
    let month = from_month;

    const start_com: Commission[] = [];

    while (
      !(
        Number(current_date.format('YY')) <= year &&
        Number(current_date.format('M')) < month
      )
    ) {
      const commmissions: Commission[] = await this.getCommission(
        year,
        month,
        account,
      );
      all_commissions.push(...commmissions);

      if (month !== 10) {
        start_com.push(...commmissions);
      }

      console.log(`M: ${month} Y: ${year} com: ${commmissions.length}`);

      month++;

      if (month > 12) {
        month = 1;
        year += 1;
      }
    }

    const start_com_set: Set<Commission> = new Set();
    let com_sum = 0;
    let com_sum_2 = 0;

    start_com.forEach((com) => {
      start_com_set.add(com);
    });

    for (const com of start_com_set) {
      com_sum += com.total_sales;
    }

    all_commissions.forEach(async (com) => {
      com_sum_2 += com.total_sales;
      await this.jobRepository.save({ uuid: com.uuid, account, ...com });
    });
    console.log(`com sum: ${com_sum}`);
    console.log(`com sum 2 : ${com_sum_2}`);

    console.log(start_com_set.size);
    console.log(all_commissions.length);
  }

  // public async getCommission(
  //   year: number,
  //   month: number,
  //   account?: 'main' | 'arizona',
  // ) {
  //   let current_page = 0;
  //   const total_pages_data = await this.workizCoreApiService.getCommission(
  //     month,
  //     year,
  //     0,
  //   );

  //   console.log('total_pages_data: ', total_pages_data, ',', year, ',', month);

  //   const all_commissions: Commission[] = [];

  //   const total_pages = Math.floor(
  //     total_pages_data.data.iTotalDisplayRecords / 100,
  //   );

  //   while (current_page <= total_pages) {
  //     const res = await this.workizCoreApiService
  //       .getCommission(month, year, current_page, account)
  //       .catch((e) => {
  //         // eslint-disable-next-line @typescript-eslint/no-empty-function
  //         fs.appendFile('./com.txt', `${e}`, {}, () => {});
  //         console.log(e);
  //       })
  //       .then((r) => {
  //         if (r) {
  //           return r;
  //         }
  //       });

  //     all_commissions.push(
  //       ...res.data.aaData.map((item) => {
  //         // console.log({
  //         //   before: item[12],
  //         //   after: parseFloat(item[12].replace(new RegExp(',', 'g'), '')),
  //         // });
  //         return {
  //           uuid: item[2].substring(12, 18), // add replace all
  //           total_sales: parseFloat(item[12].replace(new RegExp(',', 'g'), '')),
  //           cash: parseFloat(item[13].replace(new RegExp(',', 'g'), '')),
  //           credit: parseFloat(item[14].replace(new RegExp(',', 'g'), '')),
  //           billing: parseFloat(item[15].replace(new RegExp(',', 'g'), '')),
  //           check: parseFloat(item[16].replace(new RegExp(',', 'g'), '')),
  //           tech_share: item[17],
  //           tech_parts: parseFloat(item[19].replace(new RegExp(',', 'g'), '')),
  //           company_parts: parseFloat(
  //             item[20].replace(new RegExp(',', 'g'), ''),
  //           ),
  //           tech_profit: parseFloat(item[21].replace(new RegExp(',', 'g'), '')),
  //           company_profit: parseFloat(
  //             item[23].replace(new RegExp(',', 'g'), ''),
  //           ),
  //           tax: parseFloat(item[24].replace(new RegExp(',', 'g'), '')),
  //         };
  //       }),
  //     );
  //     current_page++;
  //   }

  //   return all_commissions;
  // }

  public async getCommission(
    year: number,
    month: number,
    account?: 'main' | 'arizona',
  ) {
    const commissions = await this.workizCoreApiService.getAllCommissions(
      month,
      year,
      account,
    );

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
    await this.jobLoop(from_year, from_month, account);
    await this.commissionsLoop(from_year, from_month, account);
    await this.systemSettingService.updateByCriteriaAndReturnOne(
      {},
      { is_parsing: false },
    );
  }

  public async setJobsCallFlow() {
    const jobs = await this.jobRepository.find();
    let count = 1;

    for (const job of jobs) {
      const call = await this.callService.firstJobCall(job.uuid);

      if (call && call.flow_name) {
        await this.jobRepository.update(
          { uuid: job.uuid },
          { call_flow: call.flow_name },
        );
        console.log(`${count}/${jobs.length}`);
      } else {
        await this.jobRepository.update(
          { uuid: job.uuid },
          { call_flow: null },
        );
        console.log(`${count}/${jobs.length} NOT FOUND`);
      }
      count++;
    }
  }

  public async getUnsavedJobs() {
    const unsaved_jobs = await this.jobRepository.find({
      where: { created_date: IsNull(), total_sales: Not(IsNull()) },
    });

    for (const job of unsaved_jobs) {
      await this.getFullJob(job.uuid, job.account as 'main' | 'arizona');
    }
  }
}
