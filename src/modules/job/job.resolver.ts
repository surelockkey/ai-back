import { Mutation, Resolver } from '@nestjs/graphql';
import { JobService } from './job.service';
import { Job } from './entity/job.entity';

@Resolver()
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Mutation(() => [Job])
  saveAllJobs() {
    return this.jobService.saveAllJobs();
  }
}
