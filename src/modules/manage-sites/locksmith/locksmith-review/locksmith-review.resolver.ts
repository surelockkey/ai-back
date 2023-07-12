import { Resolver } from '@nestjs/graphql';
import { LocksmithReviewService } from './locksmith-review.service';

@Resolver()
export class LocksmithReviewResolver {
  constructor(
    private readonly locksmithReviewService: LocksmithReviewService,
  ) {}
}
