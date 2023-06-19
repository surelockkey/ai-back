import { Query, Resolver } from '@nestjs/graphql';
import { JobService } from './job.service';
import { PaginatedJobDto } from '../api/workiz-api/dto/workiz-api.dto';

@Resolver()
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Query(() => PaginatedJobDto)
  public async getJobs(): Promise<PaginatedJobDto> {
    return this.jobService.getJob();
  }
}
