import { Module } from '@nestjs/common';
import { LocksmithReviewService } from './locksmith-review.service';
import { LocksmithReviewResolver } from './locksmith-review.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocksmithReview } from './entity/locksmith-review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocksmithReview])],
  providers: [LocksmithReviewService, LocksmithReviewResolver],
})
export class LocksmithReviewModule {}
