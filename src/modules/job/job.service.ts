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

  public async getJob() {
    // const jobs = (await this.workizApiService.getAllJobsWorkiz());
    // const calls = await this.ctmApiService.getCalls(1);
  }
}
