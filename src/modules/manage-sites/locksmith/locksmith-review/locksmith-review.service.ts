import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { LocksmithReview } from './entity/locksmith-review.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Repository } from 'typeorm';
import { ReviewLocksmithReviewDto } from './dto/locksmith-review.dto';
import { ReviewStatus } from './enum/reviews-status.enum';
import { GraphQLError } from 'graphql';

@Injectable()
export class LocksmithReviewService extends CrudService<LocksmithReview> {
  constructor(
    @InjectRepository(LocksmithReview)
    private readonly locksmithReviewRepository: Repository<LocksmithReview>,
    @InjectDataSource() private readonly dataSource: DataSource,
  ) {
    super(locksmithReviewRepository);
  }

  public async reviewManyLocksmithReviews(reviews: ReviewLocksmithReviewDto[]) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const rejected = reviews.filter(
        (review) => review.status === ReviewStatus.REJECTED,
      );

      if (rejected && rejected.length) {
        await queryRunner.manager.delete(LocksmithReview, {
          id: In(rejected.map((r) => r.id)),
        });
      }

      await queryRunner.manager.save(
        LocksmithReview,
        reviews.filter((r) => r.status !== ReviewStatus.REJECTED),
      );

      await queryRunner.commitTransaction();

      return this.locksmithReviewRepository.find({
        where: { id: In(reviews.map((r) => r.id)) },
      });
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }

  public async getUnreviewedReviews() {
    return await this.locksmithReviewRepository
      .createQueryBuilder('reviews')
      .select()
      .addSelect('reviews.email')
      .where('reviews.status = :status', {
        status: ReviewStatus.UNDER_CONSIDERATION,
      })
      .getMany();
  }
}
