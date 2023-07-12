import { Resolver } from '@nestjs/graphql';
import { LocksmithScheduleService } from './locksmith-schedule.service';

@Resolver()
export class LocksmithScheduleResolver {
  constructor(
    private readonly locksmithScheduleService: LocksmithScheduleService,
  ) {}
}
