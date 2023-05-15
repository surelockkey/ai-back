import { Resolver } from '@nestjs/graphql';
import { JobService } from './job.service';

@Resolver()
export class JobResolver {
  constructor(private readonly jobService: JobService) {}
}
