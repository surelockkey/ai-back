import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { JobService } from './job.service';
import { JobCustom } from './entity/job-custom.entity';
import { Job } from './entity/job.entity';

@Resolver()
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Mutation(() => [Job])
  saveAllJobs() {
    return this.jobService.getAllJobs();
  }

  @Query(() => JobCustom)
  getJobCustom() {
    return 'test';
  }
}
