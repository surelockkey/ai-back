import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Repository } from 'typeorm';
import { CreateLocksmithDto } from './dto/create-locksmith.dto';
import { Address } from './entity/address.entity';
import { Locksmith } from './entity/locksmith.entity';
import { Schedule } from './entity/schedule.entity';
import { Request } from './entity/request.entity';
import { CreateRequestDto } from './dto/create-request.dto';
import { GraphQLError } from 'graphql';
import { UpdateRequestDto } from './dto/update-request.dto';
import { UpdateLocksmithDto } from './dto/update-locksmith.dto';
import { CreateReviewsDto } from './dto/create-reviews.dto';
import { Reviews } from './entity/reviews.entity';
import { ReviewReviewsDto } from './dto/review-reviews.dto';
import { ReviewsStatus } from './enum/reviews-status.enum';
import { ReviewsWithEmailDto } from './dto/reviews-with-email.dto';
import { LocksmithWithCountNewReviewsDto } from './dto/locksmith-with-count-new-rewiews.dto';
import { ConfigService } from '@nestjs/config';
import { SendDto } from '@tech-slk/nest-crud';
import { UploadService } from 'src/modules/upload/upload.service';
import { UtilsService } from '../utils/utils.service';
import { IFileUpload } from 'src/modules/upload/type/i-file-upload';
import { UploadFileResult } from 'src/modules/upload/type/upload-result';
import { BucketName } from 'src/modules/upload/enum/bucket.enum';

@Injectable()
export class FormMemberService {
  constructor(
    @InjectRepository(Locksmith)
    private locksmithRepository: Repository<Locksmith>,
    @InjectRepository(Request) private requestRepository: Repository<Request>,
    @InjectRepository(Reviews) private reviewsRepository: Repository<Reviews>,
    private dataSource: DataSource,
    private readonly uploadService: UploadService,
    private readonly utilsService: UtilsService,
    private readonly configService: ConfigService,
  ) {}

  public async createRequest(request_dto: CreateRequestDto): Promise<Request> {
    const { address, schedule, ...request } = request_dto;

    const saved_schedule = await this.dataSource
      .getRepository<Schedule>('Schedule')
      .save(schedule);

    const saved_addresses = await this.dataSource
      .getRepository<Address>('Address')
      .save(
        address.map((address: string) => {
          return {
            name: address,
          };
        }),
      );
    const req = this.dataSource
      .getRepository<Request>('Request')
      .create(request);

    return await this.dataSource.getRepository<Request>('Request').save({
      ...req,
      schedule: saved_schedule,
      address: saved_addresses,
    });
  }

  public async createLocksmith(
    locksmith_dto: CreateLocksmithDto,
  ): Promise<Locksmith> {
    const { address, schedule, ...locksmith } = locksmith_dto;
    const saved_schedule = await this.dataSource
      .getRepository<Schedule>('Schedule')
      .save(schedule);

    const saved_addresses = await this.dataSource
      .getRepository<Address>('Address')
      .save(
        address.map((address) => {
          return {
            name: address,
          };
        }),
      );

    const locks = this.locksmithRepository.create({
      ...locksmith,
    });

    return await this.locksmithRepository.save({
      ...locks,
      schedule: saved_schedule,
      address: saved_addresses,
    });
  }

  public async editRequest(update_request_dto: UpdateRequestDto) {
    const { address, schedule, ...request } = update_request_dto;

    const exist_request = this.getRequestById(request.id);

    if (!exist_request) {
      return new GraphQLError(`Request doesn't exit.`);
    }

    let updated_address;
    let updated_schedule;
    if (address) {
      updated_address = await this.utilsService.createOrUpdateArray(
        address,
        'Address',
      );
    }

    if (schedule) {
      updated_schedule = await this.utilsService.createOrUpdateArray(
        schedule,
        'Schedule',
      );
    }

    await this.requestRepository.save({
      ...request,
      address: updated_address,
      schedule: updated_schedule,
    });

    return await this.getRequestById(request.id);
  }

  public async editLocksmith(updateLocksmithDto: UpdateLocksmithDto) {
    const { address, schedule, ...locksmith } = updateLocksmithDto;

    const exist_locksmith = this.getLocksmithById(locksmith.id);

    if (!exist_locksmith) {
      return new GraphQLError(`Locksmith doesn't exist.`);
    }

    let updated_address;
    let updated_schedule;
    if (address) {
      updated_address = await this.utilsService.createOrUpdateArray(
        address,
        'Address',
      );
    }

    if (schedule) {
      updated_schedule = await this.utilsService.createOrUpdateArray(
        schedule,
        'Schedule',
      );
    }

    await this.locksmithRepository.save({
      ...locksmith,
      address: updated_address,
      schedule: updated_schedule,
    });

    return await this.getLocksmithById(locksmith.id);
  }

  public async deleteRequestById(id: string): Promise<SendDto> {
    const exist_request = await this.getRequestById(id);

    if (!exist_request) {
      throw new GraphQLError(`Request doesn't exit.`);
    }

    await this.requestRepository.delete({ id });

    return {
      message: 'Successful',
      status: 201,
    };
  }

  //todo add using IsExist() decorator
  public async deleteLocksmithById(id: string): Promise<SendDto> {
    const exist_locksmith = await this.getLocksmithById(id);

    if (!exist_locksmith) {
      throw new GraphQLError(`Locksmith doesn't exist.`);
    }
    await this.locksmithRepository.delete({ id });

    return {
      message: 'Successful',
      status: 201,
    };
  }

  public async searchLocksmiths(
    searchValue?: string,
    first?: number,
    skip?: number,
  ): Promise<Locksmith[]> {
    const locksmiths = this.getLocksmith();

    // Searching
    if (searchValue) {
      locksmiths.andWhere(
        `(
            address.name  ILIKE :key
            OR locksmith.name ILIKE :key
            OR array_to_string(locksmith.zips, ',') ILIKE :key
            OR array_to_string(locksmith.services, ',') ILIKE :key
          )`,
        {
          key: `%${searchValue.toLowerCase()}%`,
        },
      );
    }

    locksmiths.orderBy('locksmith.priority', 'ASC');

    // Pagination
    if (skip) {
      locksmiths.skip(skip);
    }

    if (first) {
      locksmiths.take(first);
    }

    const result = await locksmiths.getMany();
    return this.checkLocksmithPhotoAndSetDefault(result);
  }

  public async searchLocksmithsFromController(
    searchValue?: string,
    first?: number,
    skip?: number,
  ): Promise<Locksmith[]> {
    const locksmiths = this.getLocksmith();

    // Searching
    if (searchValue) {
      locksmiths.andWhere(
        `(
            address.name ILIKE :key
            OR array_to_string(locksmith.zips, ',') ILIKE :key
            OR array_to_string(locksmith.services, ',') ILIKE :key
          )`,
        {
          key: `%${searchValue.toLowerCase()}%`,
        },
      );
    }

    locksmiths.orderBy('locksmith.priority', 'ASC');

    // Pagination
    if (skip) {
      locksmiths.skip(skip);
    }

    if (first) {
      locksmiths.take(first);
    }

    const result = await locksmiths.getMany();
    return this.checkLocksmithPhotoAndSetDefault(result);
  }

  private checkLocksmithPhotoAndSetDefault(
    locksmiths: Locksmith[],
  ): Locksmith[] {
    locksmiths.forEach((locksmith) => {
      if (!locksmith.photo) {
        locksmith.photo = this.configService.get('DEFAULT_LOCKSMITH_PHOTO');
      }
    });
    return locksmiths;
  }

  private getLocksmith() {
    return this.locksmithRepository
      .createQueryBuilder('locksmith')
      .leftJoinAndSelect('locksmith.address', 'address')
      .leftJoinAndSelect('locksmith.schedule', 'schedule')
      .leftJoinAndMapMany(
        'locksmith.reviews',
        Reviews,
        'reviews',
        'locksmith.id = reviews.locksmith_id AND reviews.status = :status',
        { status: ReviewsStatus.APPROVED },
      );
  }

  public async searchRequests(
    searchValue?: string,
    first?: number,
    skip?: number,
  ): Promise<Request[]> {
    // Creating query builder
    const requests = this.requestRepository
      .createQueryBuilder('request')
      .select()
      .leftJoinAndSelect('request.address', 'address')
      .leftJoinAndSelect('request.schedule', 'schedule');

    // Searching
    if (searchValue) {
      requests.andWhere(
        'address.name ILIKE :key OR request.business_name ILIKE :key',
        {
          key: `%${searchValue}%`,
        },
      );
    }

    // Pagination
    if (skip) {
      requests.skip(skip);
    }

    if (first) {
      requests.take(first);
    }

    return await requests.getMany();
  }

  //TODO CHANGE TO USE PHOTO ENTITY
  public async uploadFileToRequestGql(
    file: Promise<IFileUpload>,
    request_id: string,
  ): Promise<string> {
    const data: UploadFileResult = await this.uploadService.uploadFile(
      await file,
      BucketName.AWS_BUCKET_LOCKSMITH,
    );
    await this.requestRepository.update(
      { id: request_id },
      { photo: data.Url },
    );
    return 'Success';
  }

  public async uploadFileToLocksmithGql(
    file: Promise<IFileUpload>,
    locksmith_id: string,
  ): Promise<string> {
    const data: UploadFileResult = await this.uploadService.uploadFile(
      await file,
      BucketName.AWS_BUCKET_LOCKSMITH,
    );
    await this.locksmithRepository.update(
      { id: locksmith_id },
      { photo: data.Url },
    );
    return 'Success';
  }

  public async getRequestById(id: string): Promise<Request> {
    const request = await this.requestRepository.findOne({
      where: { id },
    });

    if (!request) {
      throw new GraphQLError(`Request not found.`);
    }
    return request;
  }

  public async getLocksmithById(id: string): Promise<Locksmith> {
    const locksmith = await this.locksmithRepository.findOne({
      where: { id },
      relations: { reviews: true },
    });

    if (!locksmith) {
      throw new GraphQLError(`Locksmith not found.`);
    }
    return locksmith;
  }

  public async getLocksmithByUrl(url: string): Promise<Locksmith> {
    return await this.getLocksmith()
      .where('locksmith.url = :url', { url })
      .getOne();
  }

  public async createReviews(
    create_reviews_dto: CreateReviewsDto,
  ): Promise<Reviews> {
    const reviews = this.reviewsRepository.create(create_reviews_dto);
    return await this.reviewsRepository.save(reviews);
  }

  public async reviewReviews(
    review_reviews: ReviewReviewsDto[],
  ): Promise<ReviewsWithEmailDto[]> {
    const rejected: string[] = [];
    review_reviews.forEach((review, index) => {
      if (review.status === ReviewsStatus.REJECTED) {
        rejected.push(review.id);
        review_reviews.splice(index, 1);
      }
    });

    rejected.length && (await this.reviewsRepository.delete(rejected));
    await this.reviewsRepository.save(review_reviews);
    return await this.reviewsRepository.find({
      where: { id: In(review_reviews.map((el) => el.id)) },
    });
  }

  public async getReviewsForConsideration(): Promise<ReviewsWithEmailDto[]> {
    return await this.reviewsRepository
      .createQueryBuilder('reviews')
      .select()
      .addSelect('reviews.email')
      .where('reviews.status = :status', {
        status: ReviewsStatus.UNDER_CONSIDERATION,
      })
      .getMany();
  }

  public async getLocksmithWithUnreviewedReviews(): Promise<
    LocksmithWithCountNewReviewsDto[]
  > {
    return (await this.locksmithRepository
      .createQueryBuilder('locksmith')
      .leftJoinAndSelect('locksmith.address', 'address')
      .leftJoinAndSelect('locksmith.schedule', 'schedule')
      .leftJoinAndMapMany(
        'locksmith.reviews',
        Reviews,
        'reviews',
        'locksmith.id = reviews.locksmith_id AND reviews.status = :status',
        { status: ReviewsStatus.UNDER_CONSIDERATION },
      )
      .loadRelationCountAndMap(
        'locksmith.count_new_reviews',
        'locksmith.reviews',
        'new_reviews',
        (qb) =>
          qb.andWhere('new_reviews.status = :status', {
            status: ReviewsStatus.UNDER_CONSIDERATION,
          }),
      )
      .where('reviews IS NOT NULL')
      .getMany()) as [LocksmithWithCountNewReviewsDto];
  }
}
