import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Call } from './entity/call.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, IsNull, MoreThanOrEqual, Not, Repository } from 'typeorm';
import { WorkizApiService } from 'src/modules/api/workiz-api/workiz-api.service';
import * as moment from 'moment';
import { WorkizCoreApiService } from 'src/modules/api/workiz-api/workiz-core.service';
import { workizCallToTableCall } from './utils/call-transformer.util';

import * as _ from 'lodash';
import { getNearestDate } from './utils/near-date.util';
import { OpenAiService } from 'src/modules/open-ai/open-ai.service';

import { get } from 'https';
import { createReadStream, createWriteStream, unlinkSync } from 'fs';

async function downloadFile(url: string, targetFile: string) {
  return await new Promise((resolve, reject) => {
    get(url, (response) => {
      const code = response.statusCode ?? 0;

      if (code >= 400) {
        return reject(new Error(response.statusMessage));
      }

      // handle redirects
      if (code > 300 && code < 400 && !!response.headers.location) {
        return resolve(downloadFile(response.headers.location, targetFile));
      }

      // save the file to disk
      const fileWriter = createWriteStream(targetFile).on('finish', () => {
        resolve({});
      });

      response.pipe(fileWriter);
    }).on('error', (error) => {
      reject(error);
    });
  });
}

@Injectable()
export class CallService {
  constructor(
    @InjectRepository(Call) private readonly callRepository: Repository<Call>,
    private readonly workizCoreApiService: WorkizCoreApiService,
    private readonly openAiService: OpenAiService,
  ) {}

  public async transcriptCalls(from: string, limit?: number) {
    const [day, month, year] = from.split('.');
    const formatted_from = `${year}-${month}-${day}`;

    const calls = await this.callRepository.find({
      where: {
        created_sql: MoreThanOrEqual(`${formatted_from} 00:00:00`),
        recording_url: Not(IsNull()),
        call_duration_int: MoreThanOrEqual(30),
      },
      take: limit,
    });

    console.log('calls length', calls.length);

    let i = 1;
    for (const call of calls) {
      if (!call.transcription) {
        const file_name = call.id + '.wav';

        console.log(call.recording_url);

        await downloadFile(call.recording_url, file_name);

        const transcription = await this.openAiService.speechToText(
          createReadStream(file_name) as any,
        );

        unlinkSync(file_name);

        await this.callRepository.update(
          { id: call.id },
          { transcription: transcription.data.text },
        );

        console.log(i);

        i++;
      }
    }
  }

  async countCallDurationInt(fromDate: string): Promise<number> {
    const parsedDate = moment(fromDate, 'DD.MM.YYYY').format(
      'YYYY-MM-DD HH:mm:ssZ',
    );
    const result = await this.callRepository
      .createQueryBuilder('call')
      .select('SUM(call.call_duration_int)', 'totalDuration')
      .where('call.created_sql >= :fromDate', { fromDate: parsedDate })
      .andWhere({
        call_duration_int: MoreThanOrEqual(30),
      })
      .getRawOne();

    return result?.totalDuration ?? 0;
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
