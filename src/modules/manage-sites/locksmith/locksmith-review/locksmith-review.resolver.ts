import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocksmithReviewService } from './locksmith-review.service';
import { LocksmithReview } from './entity/locksmith-review.entity';
import {
  LocksmithReviewWithEmail,
  RequestLocksmithReviewDto,
  ReviewLocksmithReviewDto,
} from './dto/locksmith-review.dto';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from 'src/modules/user/enum/user-role.enum';

@Resolver()
export class LocksmithReviewResolver {
  constructor(
    private readonly locksmithReviewService: LocksmithReviewService,
  ) {}

  @Mutation(() => LocksmithReview)
  requestLocksmithReview(
    @Args('review', { type: () => RequestLocksmithReviewDto })
    review: RequestLocksmithReviewDto,
  ) {
    return this.locksmithReviewService.create(review);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Mutation(() => [LocksmithReview])
  reviewManyLocksmithReviews(
    @Args('reviews', { type: () => [ReviewLocksmithReviewDto] })
    reviews: ReviewLocksmithReviewDto[],
  ) {
    return this.locksmithReviewService.reviewManyLocksmithReviews(reviews);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Query(() => [LocksmithReviewWithEmail])
  getUnreviewedReviews() {
    return this.locksmithReviewService.getUnreviewedReviews();
  }
}
