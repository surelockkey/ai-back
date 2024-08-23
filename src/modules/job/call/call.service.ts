import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Call } from './entity/call.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, IsNull, Not, Repository } from 'typeorm';
import { WorkizApiService } from 'src/modules/api/workiz-api/workiz-api.service';
import * as moment from 'moment';
import { WorkizCoreApiService } from 'src/modules/api/workiz-api/workiz-core.service';
import { workizCallToTableCall } from './utils/call-transformer.util';

import * as _ from 'lodash';
import { getNearestDate } from './utils/near-date.util';

@Injectable()
export class CallService {
  constructor(
    @InjectRepository(Call) private readonly callRepository: Repository<Call>,
    private readonly workizCoreApiService: WorkizCoreApiService,
  ) {}

  private getMonthTo(month: number, day_to: number) {
    if (month === 12 && day_to === 1) {
      return 1;
    }

    if (month !== 12 && day_to === 1) {
      return month + 1;
    }

    return month;
  }

  public async parseCalls(
    from_month: number,
    from_year: number,
    account?: 'main' | 'arizona',
  ) {
    await this.getCallsByRange(from_month, from_year, account);
    await this.changeCallsDateToIso();
    await this.changeCallsJobIds();
  }

  public async getCallsByRange(
    from_month: number,
    from_year: number,
    account?: 'main' | 'arizona',
  ) {
    try {
      console.log(account);

      let year = from_year;
      let month = from_month;

      const currentYear = moment().format('YY'); // Get the current year in 2-digit format
      const currentMonth = moment().format('M');

      console.log(currentYear, currentMonth);

      console.log(
        (Number(currentYear) > year ||
          (Number(currentYear) === year && Number(currentMonth) >= month)) &&
          (year < Number(currentYear) ||
            (year === Number(currentYear) && month <= Number(currentMonth))),
      );

      while (
        (Number(currentYear) > year ||
          (Number(currentYear) === year && Number(currentMonth) >= month)) &&
        (year < Number(currentYear) ||
          (year === Number(currentYear) && month <= Number(currentMonth)))
      ) {
        console.log('loop while');

        // const days_arr = [
        //   { day_from: 2, day_to: 6 },
        //   { day_from: 7, day_to: 14 },
        //   { day_from: 15, day_to: 22 },
        //   { day_from: 23, day_to: 1 },
        // ];

        const days_arr = [
          { day_from: 2, day_to: 5 },
          { day_from: 6, day_to: 10 },
          { day_from: 11, day_to: 15 },
          { day_from: 16, day_to: 20 },
          { day_from: 21, day_to: 25 },
          { day_from: 26, day_to: 1 },
        ];

        console.log(`Y: ${year} M: ${month}`);

        for (const day of days_arr) {
          // creating range
          const { day_from, day_to } = day;

          const month_to = this.getMonthTo(month, day_to);
          const year_to = month === 12 && day_to === 1 ? year + 1 : year;

          const date_range = `${day_from}.${month}.${year}_${day_to}.${month_to}.${year_to}`;

          console.log(`R: ${date_range}`);
          //   parsing by all pages in range
          const first_page = await this.workizCoreApiService
            .getCalls(date_range, 0, account)
            .catch((e) => {
              console.log('call get first page err', e);
            });

          const total_pages = first_page.pages;

          console.log(`T: ${total_pages}`);

          let current_page = 0;

          while (current_page < total_pages) {
            const calls_data = await this.workizCoreApiService
              .getCalls(date_range, current_page, account)
              .catch((e) => {
                console.log('call get err', e);
              });

            await this.callRepository.save(
              calls_data.aaData.map((call) =>
                workizCallToTableCall(call, account),
              ),
            );

            current_page++;
          }
        }

        // changing month/year
        month++;

        if (month > 12) {
          month = 1;
          year += 1;
        }
      }
    } catch {}
  }

  public async changeCallsDateToIso() {
    const calls = await this.callRepository.find();

    const chunked_calls = _.chunk(calls, 100);

    for (const chunk_calls of chunked_calls) {
      await Promise.all(
        chunk_calls.map(async (call) => {
          const date = moment(call.created_sql);

          await this.callRepository.update(
            { id: call.id },
            { created_sql: date.toISOString() },
          );
        }),
      );
    }
  }

  public async changeCallsJobIds() {
    const calls = await this.callRepository.find();

    console.log(calls.length);

    let count = 0;
    let count_2 = 0;

    await Promise.all(
      calls.map(async (call) => {
        if (!call?.job_id && call.client_number) {
          const date = moment(call.created_sql);

          const related_calls = await this.callRepository.find({
            where: {
              client_number: call.client_number,
              created_sql: Between(
                date.utc().subtract(6, 'hours').format('YYYY-MM-DD HH:MM:SS'),
                date.utc().add(12, 'hours').format('YYYY-MM-DD HH:MM:SS'),
              ),
              id: Not(call.id),
              job_id: Not(''),
            },
          });

          const job_ids = new Set();

          related_calls.forEach((related_call) => {
            if (related_call?.job_id) {
              job_ids.add(related_call.job_id);
            }
          });

          if (
            related_calls.length > 0 &&
            job_ids.size > 0 &&
            job_ids.size < 2
          ) {
            await this.callRepository.update(
              { id: call.id },
              { job_id: related_calls[0]?.job_id, job_id_verified: false },
            );
            count++;
          }

          if (related_calls.length > 0 && job_ids.size > 1) {
            count_2++;
            const nearest_date = getNearestDate(
              related_calls,
              call.created_sql,
            );

            await this.callRepository.update(
              { id: call.id },
              { job_id: nearest_date[0]?.job_id, job_id_verified: false },
            );
          }
        }
      }),
    );

    console.log({
      count,
      count_2,
    });
  }

  public async firstJobCall(job_id: string) {
    const [call] = await this.callRepository.find({
      where: {
        job_id,
        flow_name: Not(IsNull()),
        direction: 'inbound',
      },
      order: {
        created_sql: 'ASC',
      },
      take: 1,
    });

    return call;
  }
}
