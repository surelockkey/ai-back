import { Injectable } from '@nestjs/common';
import { WorkizApiService } from '../api/workiz-api/workiz-api.service';
import { CtmApiService } from '../api/ctm-api/ctm-api.service';
import { CrudService } from '@tech-slk/nest-crud';
import { Job } from './entity/job.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class JobService extends CrudService<Job> {
  constructor(
    @InjectRepository(Job) private readonly jobRepository: Repository<Job>,
    private readonly workizApiService: WorkizApiService,
    private readonly ctmApiService: CtmApiService,
  ) {
    super(jobRepository);
  }

  public async saveAllJobs() {
    const jobs = await this.workizApiService.getAllJobsForSave();

    const res = await this.jobRepository.save(
      jobs.map((job) => {
        return {
          workiz_id: job.UUID,
          serial_id: job.SerialId,
          job_date_time: job.JobDateTime,
          job_end_date_time: job.JobEndDateTime,
          created_date: job.CreatedDate,
          job_total_price: job.JobTotalPrice,
          job_amount_due: job.JobAmountDue,
          sub_total: job.SubTotal,
          client_id: job.ClientId,
          status: job.Status,
          sub_status: job.SubStatus,
          payment_due_date: job.PaymentDueDate,
          phone: job.Phone,
          second_phone: job.SecondPhone,
          phone_ext: job.PhoneExt,
          second_phone_ext: job.SecondPhoneExt,
          email: job.Email,
          comments: job.Comments,
          first_name: job.FirstName,
          last_name: job.LastName,
          company: job.Company,
          address: job.Address,
          city: job.City,
          state: job.State,
          postal_code: job.PostalCode,
          country: job.Country,
          unit: job.Unit,
          latitude: job.Latitude,
          longitude: job.Longitude,
          job_type: job.JobType,
          job_notes: job.JobNotes,
          job_source: job.JobSource,
          created_by: job.CreatedBy,
          last_status_update: job.LastStatusUpdate,
        };
      }),
      { chunk: 100 },
    );

    console.log(res.length);

    return res;
    // const calls = await this.ctmApiService.getCalls(1);
  }
}
