import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CallService } from './call.service';
import { SendDto } from '@tech-slk/nest-crud';
import { Account } from '../enum/account.enum';

@Resolver()
export class CallResolver {
  constructor(private readonly callService: CallService) {}

  @Mutation(() => SendDto)
  getCallsByRange(
    @Args('from_year', { type: () => Int, nullable: true, defaultValue: 18 })
    from_year: number,
    @Args('from_month', { type: () => Int, nullable: true, defaultValue: 1 })
    from_month: number,
    @Args('account', { type: () => Account, defaultValue: Account.main })
    account: Account,
  ) {
    return this.callService.getCallsByRange(from_month, from_year, account);
  }

  @Mutation(() => String)
  changeCallsDateToIso() {
    return this.callService.changeCallsDateToIso();
  }

  @Query(() => Int)
  getCallsDurations(@Args('from') from: string) {
    return this.callService.countCallDurationInt(from);
  }

  @Query(() => Int)
  transcriptCalls(
    @Args('from') from: string,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
  ) {
    return this.callService.transcriptCalls(from, limit);
  }

  @Mutation(() => String)
  changeCallsJobIds() {
    return this.callService.changeCallsJobIds();
  }

  @Mutation(() => SendDto)
  parseCalls(
    @Args('from_year', { type: () => Int, nullable: true, defaultValue: 18 })
    from_year: number,
    @Args('from_month', { type: () => Int, nullable: true, defaultValue: 1 })
    from_month: number,
    @Args('account', { type: () => Account, defaultValue: Account.main })
    account: Account,
  ) {
    return this.callService.parseCalls(from_month, from_year, account);
  }
}
