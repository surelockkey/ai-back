import { Injectable } from "@nestjs/common";
import { WorkizApiService } from "../api/workiz-api/workiz-api.service";
import { CrudService } from "@tech-slk/nest-crud";
import { Job } from "./entity/job.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PaginatedJobDto } from "../api/workiz-api/dto/workiz-api.dto";
import { WorkizCoreApiService } from "../api/workiz-api/workiz-core.service";

@Injectable()
export class JobService extends CrudService<Job> {
  constructor(
    @InjectRepository(Job) private readonly jobRepository: Repository<Job>,
    private readonly workizApiService: WorkizApiService,
    private readonly workizCoreApiService: WorkizCoreApiService
  ) {
    super(jobRepository);
  }

  public async getJob(): Promise<PaginatedJobDto> {
    let current_page = 1;
    let total_pages = (await this.getJobsByRange(current_page)).pages;

    while (current_page < total_pages) {
      const req = (await this.getJobsByRange(current_page));
      const jobs = req.aaData;
          
      await Promise.all((jobs || [])?.map(async (job) => {
        await this.getFullJob(job.uuid)
      }))

      current_page++;
    }

    return { items: [], has_more: true };
  }

  private async getJobsByRange(current_page: number) {
    try {
      return await this.workizCoreApiService.req(
        '/ajaxc/job/jobReport/',
        'post',
        {
          page: current_page,
          pageSize: 500,
          sorted: [{ id: "created", desc: true }],
          filtered: [],
          sSearch: "",
          final_q: `2.6.23_1.7.23`,
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

  private async getFullJob(job_id: string){
    try {
      const job = await this.workizCoreApiService.req(
        `/ajaxc/job/get/${job_id}/`,
        'post',
      );
  
      await this.jobRepository.save({
        uuid: job.data.uuid,
        start_date: job.data.job_date,
        end_date: job.data.job_end_date,
        created_date: job.data.created,
        total_price: Number(job.data.job_total_price),
        amount_due: Number(job.data.job_amount_due),
        client_id: Number(job.data.client_id),
        status: job.data.status,
        phone: job.data.primary_phone,
        second_phone: job.data.secondary_phone,
        email: job.data.client_email_address,
        client_name: job.data.first_name + ' ' + job.data.last_name,
        city: job.data.city,
        state: job.data.state,
        postal_code: job.data.zipcode,
        job_type: job.data.type_name,
        job_note: job.data.job_description,
        job_source: job.data.job_source,
        technician_name: job.data.techs[0] && job.data.techs[0].technition,
        dispatcher_name: job.data.user_created,
        address: job.data.address,
      })
    } catch(e) {
      console.log(e);   
    }
  }
}



    // while (current_page < total_pages) {
    //   const data = await this.workizCoreApiService.req(
    //     {
    //       page: current_page,
    //       pageSize: 50,
    //       sorted: [{ id: "created", desc: true }],
    //       filtered: [],
    //       sSearch: "",
    //       final_q: "1.5.19_1.4.20",
    //       timeQueryChanged: false,
    //       pickerParams: { report_by: 3 },
    //       react: true,
    //       withCsv: false,
    //       pickerOn: true,
    //       filters: {
    //         user: [],
    //         tag: [],
    //         metro: [],
    //         type: [],
    //         status: [],
    //         created_by: [],
    //         source: [],
    //         company: [],
    //       },
    //     },
    //     '/ajaxc/job/jobReport/',
    //     'post'
    //   );    
  
    //   total_pages = data.total;
  
    //   jobs.push(...data.aaData);
    //   current_page++;

    //   console.log(current_page, total_pages, jobs.length)
    // }