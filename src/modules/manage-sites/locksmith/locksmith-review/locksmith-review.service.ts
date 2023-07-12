import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { LocksmithReview } from './entity/locksmith-review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LocksmithReviewService extends CrudService<LocksmithReview> {
  constructor(
    @InjectRepository(LocksmithReview)
    private readonly locksmithReviewRepository: Repository<LocksmithReview>,
  ) {
    super(locksmithReviewRepository);
  }
}
