import { Injectable } from '@nestjs/common';
import { WorkizApiService } from '../api/workiz-api/workiz-api.service';
import { CtmApiService } from '../api/ctm-api/ctm-api.service';
import { writeFileSync } from 'fs';

@Injectable()
export class JobService {
  constructor(
    private readonly workizApiService: WorkizApiService,
    private readonly ctmApiService: CtmApiService,
  ) {}

  public async getJob() {
    // const jobs = (await this.workizApiService.getAllJobsWorkiz());
    // const calls = await this.ctmApiService.getCalls(1);
  }
}
