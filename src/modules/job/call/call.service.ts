import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Call } from './entity/call.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkizApiService } from 'src/modules/api/workiz-api/workiz-api.service';
import * as moment from 'moment';
import { WorkizCoreApiService } from 'src/modules/api/workiz-api/workiz-core.service';

@Injectable()
export class CallService extends CrudService<Call> {
  constructor(
    @InjectRepository(Call) private readonly callRepository: Repository<Call>,
    private readonly workizCoreApiService: WorkizCoreApiService,
  ) {
    super(callRepository);
  }

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
      const all_calls = [];
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
          { day_from: 1, day_to: 10 },
          { day_from: 10, day_to: 20 },
          { day_from: 20, day_to: 1 },
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

            all_calls.push(calls_data.aaData);

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
}
