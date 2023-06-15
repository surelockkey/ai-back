import { Injectable } from '@nestjs/common';
import { WorkizApiService } from '../api/workiz-api/workiz-api.service';
import { CtmApiService } from '../api/ctm-api/ctm-api.service';
import { CrudService } from '@tech-slk/nest-crud';
import { Job } from './entity/job.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginatedJobDto } from '../api/workiz-api/dto/workiz-api.dto';

@Injectable()
export class JobService extends CrudService<Job> {
  constructor(
    @InjectRepository(Job) private readonly jobRepository: Repository<Job>,
    private readonly workizApiService: WorkizApiService,
    private readonly ctmApiService: CtmApiService,
  ) {
    super(jobRepository);
  }

  public async getJob(): Promise<PaginatedJobDto> {
    let page = 1;
    let has_more = true

    while (has_more) {
      const jobs = (await this.workizApiService.getAllJobsWorkiz(100, (page - 1)));
      // const calls = await this.ctmApiService.getCalls(1);
      
      jobs.items.forEach((item) => {
        this.jobRepository.save({
          uuid: item.UUID,
          start_date: item.JobDateTime,
          end_date: item.JobEndDateTime,
          created_date: item.JobEndDateTime,
          total_price: Number(item.JobTotalPrice),
          amount_due: Number(item.JobAmountDue),
          client_id: Number(item.ClientId),
          status: item.Status,
          phone: item.Phone,
          second_phone: item.SecondPhone,
          email: item.Email,
          client_name: item.FirstName + ' ' + item.LastName,
          city: item.City,
          state: item.State,
          postal_code: item.PostalCode,
          job_type: item.JobType,
          job_note: item.JobNotes,
          job_source: item.JobSource,
          technician_name: item.Team[0] && item.Team[0].Name,
          dispatcher_name: item.CreatedBy,
          address: item.Address,
          manager_notes: item.manager_note
        })
      })

      page++;
      has_more = jobs.has_more;
    }
    
    return { items: [], has_more: true };
  }
}
