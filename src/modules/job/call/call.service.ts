import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Call } from './entity/call.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, IsNull, Not, Repository } from 'typeorm';
import { WorkizApiService } from 'src/modules/api/workiz-api/workiz-api.service';
import * as moment from 'moment';
import { WorkizCoreApiService } from 'src/modules/api/workiz-api/workiz-core.service';
import { workizCallToTableCall } from './utils/call-transformer.util';

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

  public async getCallsByRange(
    from_month: number,
    from_year: number,
    account?: 'main' | 'arizona',
  ) {
    try {
      console.log(account);

      const current_date = moment();

      let year = from_year;
      let month = from_month;

      while (
        !(
          Number(current_date.format('YY')) <= year &&
          Number(current_date.format('M')) < month
        )
      ) {
        const days_arr = [
          { day_from: 2, day_to: 6 },
          { day_from: 7, day_to: 14 },
          { day_from: 15, day_to: 22 },
          { day_from: 23, day_to: 1 },
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
          const first_page = await this.workizCoreApiService.getCalls(
            date_range,
            0,
            account,
          );

          const total_pages = first_page.pages;

          console.log(`T: ${total_pages}`);

          let current_page = 0;

          while (current_page < total_pages) {
            const calls_data = await this.workizCoreApiService.getCalls(
              date_range,
              current_page,
              account,
            );

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

  public async changeCallsJobIds() {
    const calls = await this.callRepository.find({ take: 200 });

    calls.forEach(async (call) => {
      if (!call.job_id) {
        const date = moment(call.created_sql);
        // console.log(
        //   `date: ${date.format('MMMM Do YYYY, h:mm:ss a')}from_date: ${date
        //     .add(3, 'days')
        //     .format('MMMM Do YYYY, h:mm:ss a')} to_date: ${date
        //     .subtract(6, 'days')
        //     .format('MMMM Do YYYY, h:mm:ss a')}`,
        // );

        const all_cal = await this.callRepository.find({
          where: {
            client_number: call.client_number,
            created_sql: Between(
              date.add(3, 'days').format('X'),
              date.subtract(6, 'days').format('X'),
            ),
          },
        });

        console.log(all_cal.length);
      }
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