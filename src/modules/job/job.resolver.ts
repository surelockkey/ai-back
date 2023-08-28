import { Query, Resolver } from '@nestjs/graphql';
import { JobService } from './job.service';

@Resolver()
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Query(() => String)
  public async getJobs(): Promise<string> {
    await this.jobService.jobLoop();

    return 'Job started';
  }

  @Query(() => String)
  public async getCommission() {
    return this.jobService.commissionsLoop();
  }
}
