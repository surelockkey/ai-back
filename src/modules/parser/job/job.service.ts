import { Injectable } from '@nestjs/common';
import { WorkizService } from '../workiz/workiz.service';

import * as fs from 'fs';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './entity/job.entity';
import { GraphQLError } from 'graphql';

import { DataSource, Repository } from 'typeorm';
import { JobTech } from './entity/job-tech.entity';
import { JobProp } from './entity/job-prop.entity';
import { JobItem } from './entity/job-item.entity';
import { JobFile } from './entity/job-file.entity';
import { JobCustom } from './entity/job-custom.entity';
import { JobPayment } from './entity/job-payment.entity';
import { JobBonuses } from './entity/job-bonuses.entity';
import { JobTypeInfo } from './entity/job-type-info.entity';
import { JobDiscount } from './entity/job-discount.entity';
import { JobCarKeyType } from './entity/job-car-key-type.entity';
import { JobDispatchers } from './entity/job-dispatchers.entity';
import { JobOtherContact } from './entity/job-other-contact.entity';
import { JobCustomFields } from './entity/job-custom-fields.entity';
import { JobCustomFieldTech } from './entity/job-custom-fields-tech.entity';
import { JobServiceFeeTotals } from './entity/job-service-fee-totals.entity';
import { JobChecklistDispatch } from './entity/job-checklist-dispatch.entity';
import { JobCoordinatorsChecklist } from './entity/job-coordinators-checklist.entity';
import { JobWorkiz } from './interface/workiz-job.interface';

@Injectable()
export class JobService {
  constructor(
    private readonly workizService: WorkizService,
    private readonly dataSource: DataSource,
    @InjectRepository(Job) private readonly job: Repository<Job>,
    @InjectRepository(JobTech) private readonly jobTech: Repository<JobTech>,
    @InjectRepository(JobProp) private readonly jobProp: Repository<JobProp>,
    @InjectRepository(JobItem) private readonly jobItem: Repository<JobItem>,
    @InjectRepository(JobFile) private readonly jobFile: Repository<JobFile>,
    @InjectRepository(JobCustom)
    private readonly jobCustom: Repository<JobCustom>,
    @InjectRepository(JobPayment)
    private readonly jobPayment: Repository<JobPayment>,
    @InjectRepository(JobBonuses)
    private readonly jobBonuses: Repository<JobBonuses>,
    @InjectRepository(JobTypeInfo)
    private readonly jobTypeInfo: Repository<JobTypeInfo>,
    @InjectRepository(JobDiscount)
    private readonly jobDiscount: Repository<JobDiscount>,
    @InjectRepository(JobCarKeyType)
    private readonly jobCarKeyType: Repository<JobCarKeyType>,
    @InjectRepository(JobDispatchers)
    private readonly jobDispatchers: Repository<JobDispatchers>,
    @InjectRepository(JobOtherContact)
    private readonly jobOtherContact: Repository<JobOtherContact>,
    @InjectRepository(JobCustomFields)
    private readonly jobCustomFields: Repository<JobCustomFields>,
    @InjectRepository(JobCustomFieldTech)
    private readonly jobCustomFieldTech: Repository<JobCustomFieldTech>,
    @InjectRepository(JobServiceFeeTotals)
    private readonly jobServiceFeeTotals: Repository<JobServiceFeeTotals>,
    @InjectRepository(JobChecklistDispatch)
    private readonly jobChecklistDispatch: Repository<JobChecklistDispatch>,
    @InjectRepository(JobCoordinatorsChecklist)
    private readonly jobCoordinatorsChecklist: Repository<JobCoordinatorsChecklist>,
  ) {}

  public async getAllJobs() {
    let page = 0;

    let total_pages = 1;

    const jobs = [];

    while (page !== total_pages) {
      const { aaData, ...info } = await this.workizService.req(
        '/ajaxc/job/jobList/',
        'post',
        {
          page,
          pageSize: 100,
          sorted: [{ id: 'job_date', desc: false }],
          filtered: [],
          sSearch: '',
          final_q: '1.6.22',
          timeQueryChanged: true,
          pickerParams: {},
          react: true,
          withCsv: false,
          pickerOn: false,
          filters: {
            user: [],
            tag: [],
            metro: [],
            type: [],
            status: [
              'Submitted',
              'In progress',
              'Pending',
              'done pending approval',
            ],
          },
        },
      );

      console.log({ info });

      jobs.push(...aaData);

      total_pages = info.pages;

      page++;
    }
    console.log({
      action: 'Fetch submitted jobs',
      length: jobs.length,
    });

    const all_full_jobs: JobWorkiz[] = await Promise.all(
      jobs.map(async (job) => {
        try {
          const res = await this.workizService.req(
            `/ajaxc/job/get/${job.uuid}/`,
            'post',
          );

          console.log(res.data?.client_tags);

          return res.data;
        } catch (error) {
          console.log({ job, error });
        }
      }),
    );

    await this.saveAllJobs(all_full_jobs);

    // fs.writeFile('data.json', JSON.stringify(all_full_jobs), (err) => {
    //   console.log(err);
    // });
  }

  public async saveAllJobs(jobs: JobWorkiz[]) {
    const queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();

    try {
      for (const job_element of jobs) {
        const {
          prop,
          custom,
          custom_fields,
          jobTypeInfo,
          files,
          job_items,
          payments,
          discount,
          service_fee_totals,
          techs,
          id,
          ...job
        } = job_element;

        const { id: job_id } = await queryRunner.manager.save(Job, {
          ...job,
          workiz_id: id,
        });

        await queryRunner.manager.save(JobProp, {
          ...prop,
          id: undefined,
          workiz_id: prop.id,
          job_id,
        });

        await queryRunner.manager.save(JobCustom, {
          ...custom,
          job_id,
        });

        const { id: custom_fields_id } = await queryRunner.manager.save(
          JobCustomFields,
          { job_id },
        );

        const {
          coordinators_checklist,
          bonuses_,
          checklist_dispatch_,
          dispatchers,
          other_contact,
          tech,
          car_key_type,
        } = custom_fields;

        await queryRunner.manager.save(JobCoordinatorsChecklist, {
          ...coordinators_checklist,
          custom_fields_id,
        });

        await queryRunner.manager.save(JobBonuses, {
          ...bonuses_,
          custom_fields_id,
        });

        await queryRunner.manager.save(JobChecklistDispatch, {
          ...checklist_dispatch_,
          custom_fields_id,
        });

        await queryRunner.manager.save(JobDispatchers, {
          ...dispatchers,
          custom_fields_id,
        });

        await queryRunner.manager.save(JobOtherContact, {
          ...other_contact,
          custom_fields_id,
        });

        await queryRunner.manager.save(JobCustomFieldTech, {
          ...tech,
          custom_fields_id,
        });

        await queryRunner.manager.save(JobCarKeyType, {
          ...car_key_type,
          custom_fields_id,
        });

        await queryRunner.manager.save(JobTypeInfo, {
          ...jobTypeInfo,
          job_id,
          id: undefined,
          workiz_id: jobTypeInfo.id,
        });

        await queryRunner.manager.save(
          JobFile,
          files.map((file) => ({
            ...file,
            our_job_id: job_id,
            id: undefined,
            workiz_id: file.id,
          })),
        );

        await queryRunner.manager.save(
          JobPayment,
          payments.map((payment) => ({
            ...payment,
            id: undefined,
            our_job_id: job_id,
            workiz_id: payment.id,
          })),
        );

        await queryRunner.manager.save(
          JobItem,
          job_items.map((item) => ({
            ...item,
            our_job_id: job_id,
            id: undefined,
            workiz_id: item.id,
          })),
        );

        await queryRunner.manager.save(JobDiscount, {
          ...discount,
          job_id,
        });

        await queryRunner.manager.save(JobServiceFeeTotals, {
          ...service_fee_totals,
          job_id,
        });

        await queryRunner.manager.save(
          JobTech,
          techs.map((tech) => ({
            ...tech,
            job_id,
            id: undefined,
            workiz_id: tech.id,
          })),
        );
      }

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }
}
