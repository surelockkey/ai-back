import { Injectable } from '@nestjs/common';
import { WorkizApiService } from '../api/workiz-api/workiz-api.service';
import { CrudService } from '@tech-slk/nest-crud';
import { Job } from './entity/job.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginatedJobDto } from '../api/workiz-api/dto/workiz-api.dto';
import { WorkizCoreApiService } from '../api/workiz-api/workiz-core.service';
import * as moment from 'moment';
import { Call } from './entity/call.entity';
import { ActivityLog } from './entity/activity-log.entity';
import { workizJobToTableJob } from './utils/job-transformet.util';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job) private readonly jobRepository: Repository<Job>,
    private readonly workizApiService: WorkizApiService,
    private readonly workizCoreApiService: WorkizCoreApiService,
    @InjectRepository(Call) private readonly callRepository: Repository<Call>,
    @InjectRepository(ActivityLog)
    private readonly activityLogRepository: Repository<ActivityLog>,
  ) {}

  public async jobLoop() {
    // await this.jobRepository.delete({ account: 'arizona' });

    await this.callRepository.delete({ account: 'arizona' });

    await this.activityLogRepository.delete({ account: 'arizona' });

    const current_date = moment();
    let year = 18;
    let month = 1;

    while (
      !(
        Number(current_date.format('YY')) <= year &&
        Number(current_date.format('M')) < month
      )
    ) {
      await this.getJob(year, month);

      month++;

      if (month > 12) {
        month = 1;
        year += 1;
      }

      console.log(month, year);
    }
  }

  public async getJob(year: number, month: number): Promise<PaginatedJobDto> {
    let current_page = 0;
    const total_pages_data = await this.getJobsByRange(
      current_page,
      year,
      month,
    )
      .catch((e) => console.log(e))
      .then((r) => r);

    console.log('total_pages: ', total_pages_data);
    const total_pages = total_pages_data.pages;

    while (current_page < total_pages) {
      const req = await this.getJobsByRange(current_page, year, month);
      const jobs = req.aaData;

      await Promise.all(
        (jobs || [])?.map(async (job) => {
          await this.getFullJob(job.uuid);
        }),
      );

      current_page++;
    }

    return { items: [], has_more: true };
  }

  private async getJobsByRange(
    current_page: number,
    year: number,
    month: number,
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
      );
    } catch (e) {
      console.log(e);
    }
  }

  private async getFullJob(job_id: string) {
    try {
      const job = await this.workizCoreApiService.req(
        `/ajaxc/job/get/${job_id}/`,
        'post',
      );

      const activities = (
        await this.workizCoreApiService.req(
          `/ajaxc/job/jobTimelineFull/${job.data.job_id}/`,
          'post',
          {},
        )
      ).data;

      let activity_counter = 0;

      if (job.data && activities) {
        while (activity_counter < activities.length) {
          if (activities[activity_counter]._type === 'calls') {
            await this.callRepository.save({
              call_id: activities[activity_counter].id,
              call_sid: activities[activity_counter].call_sid,
              created: activities[activity_counter].created,
              from: activities[activity_counter].from,
              to: activities[activity_counter].to,
              recording_url: activities[activity_counter].recording_url,
              from_zip: activities[activity_counter].from_zip,
              to_zip: activities[activity_counter].to_zip,
              call_duration: activities[activity_counter].call_duration,
              call_status: activities[activity_counter].call_status,
              direction: activities[activity_counter].direction,
              job_id: activities[activity_counter].job_id,
              is_active: activities[activity_counter].is_active,
              client_id: activities[activity_counter].client_id,
              ad_group_id: activities[activity_counter].ad_group_id,
              phoneNumber: activities[activity_counter].phoneNumber,
              timeInt: activities[activity_counter].timeInt,
              time: activities[activity_counter].time,
              account: 'arizona',
            });
          } else {
            // await this.activityLogRepository.save({
            //   activity_id: activities[activity_counter].id,
            //   account_id: activities[activity_counter].account_id,
            //   text: activities[activity_counter].text,
            //   uid: activities[activity_counter].uid,
            //   uname: activities[activity_counter].uname,
            //   job_id: activities[activity_counter].job_id,
            //   uuid: activities[activity_counter].uuid,
            //   timestamp: activities[activity_counter].timestamp,
            //   timeInt: activities[activity_counter].timeInt,
            //   time: activities[activity_counter].time,
            //   searchTerm: activities[activity_counter].searchTerm,
            //   account: 'arizona',
            // });
          }

          activity_counter++;
        }

        await this.jobRepository.save(workizJobToTableJob(job));
      }
    } catch (e) {
      console.log(e);
    }
  }

  public async commissionsLoop() {
    const all_commissions = [];
    const current_date = moment();
    let year = 18;
    let month = 1;

    while (
      !(
        Number(current_date.format('YY')) <= year &&
        Number(current_date.format('M')) < month
      )
    ) {
      const commmissions = await this.getCommission(year, month);
      all_commissions.push(...commmissions);

      month++;

      if (month > 12) {
        month = 1;
        year += 1;
      }

      console.log(month, year);
    }

    console.log(all_commissions);
    console.log(all_commissions.length);
  }

  public async getCommission(year: number, month: number) {
    let current_page = 0;
    const total_pages_data = await this.workizCoreApiService.getCommission(
      month,
      year,
      0,
    );

    const all_commissions = [];

    const total_pages = Math.floor(total_pages_data.iTotalDisplayRecords / 100);

    while (current_page <= total_pages) {
      const res = await this.workizCoreApiService.getCommission(
        month,
        year,
        current_page,
      );

      console.log(res);

      all_commissions.push(...res.aaData);
      current_page++;
    }

    return all_commissions;
  }
}
