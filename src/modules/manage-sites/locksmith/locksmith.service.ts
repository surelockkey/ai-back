import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Locksmith } from './entity/locksmith.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateLocksmithDto, UpdateLocksmithDto } from './dto/locksmith.dto';
import { GraphQLError } from 'graphql';
import { FileService } from 'src/modules/file/file.service';
import { LocksmithScheduleService } from './locksmith-schedule/locksmith-schedule.service';
import { FindPaginationDto } from 'src/core/dto/pagination.dto';
import { LocksmithReview } from './locksmith-review/entity/locksmith-review.entity';
import { ReviewStatus } from './locksmith-review/enum/reviews-status.enum';
import { PaginatedLocksmith } from './dto/paginated-locksmith.dto';

@Injectable()
export class LocksmithService extends CrudService<Locksmith> {
  constructor(
    @InjectRepository(Locksmith)
    private readonly locksmithRepository: Repository<Locksmith>,
    @InjectDataSource() private readonly dataSource: DataSource,
    private readonly fileService: FileService,
    private readonly locksmithScheduleService: LocksmithScheduleService,
  ) {
    super(locksmithRepository);
  }

  public async createLocksmith(locksmith_dto: CreateLocksmithDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const { file, schedules, ...locksmith } = locksmith_dto;

      if (file && locksmith.file_url) {
        throw new GraphQLError(`You can attach only url or file`);
      }

      let file_id;
      if (file) {
        const saved_file = await this.fileService.uploadImageSharp(await file);
        file_id = saved_file.id;
      }

      const saved_locksmith = await queryRunner.manager.save(Locksmith, {
        ...locksmith,
        file_id,
      });

      if (schedules && schedules.length) {
        await this.locksmithScheduleService.saveManyScheduleTransactional(
          schedules,
          saved_locksmith.id,
          queryRunner,
        );
      }

      await queryRunner.commitTransaction();

      const res = await this.findOneById(saved_locksmith.id);

      return res;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }

  public async updateLocksmith(locksmith_dto: UpdateLocksmithDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const { file, schedules, ...locksmith } = locksmith_dto;

      const current_locksmith = await this.findOneById(locksmith.id);

      if (file && current_locksmith.file_id) {
        await this.fileService.updateImageSharp(
          await file,
          current_locksmith.file_id,
        );
      } else {
        await this.fileService.uploadImageSharp(
          await file,
          queryRunner.manager,
          queryRunner,
        );
      }

      await queryRunner.manager.update(
        Locksmith,
        { id: locksmith.id },
        locksmith,
      );

      if (schedules && schedules.length) {
        await this.locksmithScheduleService.updateManySchedulesTransactional(
          schedules,
          queryRunner,
        );
      }

      await queryRunner.commitTransaction();

      return this.findOneById(locksmith.id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }

  public async getLocksmiths(
    { skip, take }: FindPaginationDto,
    confirmed: boolean,
    search_value?: string,
  ): Promise<PaginatedLocksmith> {
    const qb = this.locksmithRepository
      .createQueryBuilder('locksmith')
      .leftJoinAndSelect('locksmith.schedules', 'schedule')
      .leftJoinAndMapMany(
        'locksmith.reviews',
        LocksmithReview,
        'reviews',
        'locksmith.id = reviews.locksmith_id AND reviews.status = :status',
        { status: ReviewStatus.APPROVED },
      )
      .where({ confirmed });

    if (search_value) {
      qb.andWhere(
        `
        array_to_string(locksmith.address, ',')  ILIKE :key
        OR locksmith.name ILIKE :key
        OR array_to_string(locksmith.services, ',') ILIKE :key
      `,
        {
          key: `%${search_value.toLowerCase()}%`,
        },
      );
    }

    qb.orderBy('locksmith.priority', 'ASC').skip(skip).take(take);

    const [items, total] = await qb.getManyAndCount();

    return { items, total };
  }

  public async getLocksmithWithUnreviewedReviews() {
    return await this.locksmithRepository
      .createQueryBuilder('locksmith')
      .leftJoinAndSelect('locksmith.schedules', 'schedule')
      .leftJoinAndMapMany(
        'locksmith.reviews',
        LocksmithReview,
        'review',
        'locksmith.id = review.locksmith_id AND review.status = :status',
        { status: ReviewStatus.UNDER_CONSIDERATION },
      )
      .loadRelationCountAndMap(
        'locksmith.count_new_reviews',
        'locksmith.reviews',
        'new_reviews',
        (qb) =>
          qb.andWhere('new_reviews.status = :status', {
            status: ReviewStatus.UNDER_CONSIDERATION,
          }),
      )
      .where('review IS NOT NULL')
      .getMany();
  }
}
