import { Query, Resolver } from '@nestjs/graphql';
import { JobService } from './job.service';
// import { WorkizService } from './workiz.service';

@Resolver()
export class JobResolver {
  constructor(private readonly jobService: JobService) {}
}
