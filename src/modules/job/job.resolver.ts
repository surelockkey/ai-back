import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JobService } from './job.service';
import { Account } from './enum/account.enum';

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
    return this.jobService.commissionsLoop(23, 1, 'main');
  }

  @Mutation(() => String)
  startUpdateJobsInfo(
    @Args('from_year', { type: () => Int, nullable: true, defaultValue: 18 })
    from_year: number,
    @Args('from_month', { type: () => Int, nullable: true, defaultValue: 1 })
    from_month: number,
    @Args('account', { type: () => Account, defaultValue: Account.main })
    account: Account,
  ) {
    this.jobService.startUpdateJobsInfo(from_year, from_month, account);
    return 'Success';
  }

  @Mutation(() => String)
  setJobsCallFlow() {
    return this.jobService.setJobsCallFlow();
  }
}
