import { UseGuards, UsePipes } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLocksmithDto } from './dto/create-locksmith.dto';
import { CreateRequestDto } from './dto/create-request.dto';
import { Locksmith } from './entity/locksmith.entity';
import { FormMemberService } from './form-member.service';
import { Request } from './entity/request.entity';
import { UpdateRequestDto } from './dto/update-request.dto';
import { UpdateLocksmithDto } from './dto/update-locksmith.dto';
import { Reviews } from './entity/reviews.entity';
import { CreateReviewsDto } from './dto/create-reviews.dto';
import { ReviewReviewsDto } from './dto/review-reviews.dto';
import { ReviewsWithEmailDto } from './dto/reviews-with-email.dto';
import { LocksmithWithCountNewReviewsDto } from './dto/locksmith-with-count-new-rewiews.dto';
import { SendDto } from '@tech-slk/nest-crud';
import { GqlAuthGuard } from 'src/modules/authorization/guard/auth.guard';
import { UploadFileToLocksmithArgs } from './args/upload-file-to-locksmith.args';
import { UploadFileToRequestArgs } from './args/upload-file-to-request.args';
import { FileInArgsPipe } from 'src/modules/upload/pipe/check-file-size-in-args.pipe';

@Resolver()
export class FormMemberResolver {
  constructor(private readonly formMemberService: FormMemberService) {}

  //todo find out which method used (controller or this resolver)
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Request)
  public createRequest(
    @Args('createRequestDto', { type: () => CreateRequestDto })
    createRequestDto: CreateRequestDto,
  ) {
    return this.formMemberService.createRequest(createRequestDto);
  }

  @UseGuards(GqlAuthGuard)
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Locksmith)
  public createLocksmith(
    @Args('createLocksmithDto', { type: () => CreateLocksmithDto })
    createLocksmithDto: CreateLocksmithDto,
  ) {
    return this.formMemberService.createLocksmith(createLocksmithDto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Request])
  public searchRequests(
    @Args('searchValue', { nullable: true }) searchValue: string,
    @Args('skip', { nullable: true }) skip: number,
    @Args('first', { nullable: true }) first: number,
  ) {
    return this.formMemberService.searchRequests(searchValue, first, skip);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Locksmith])
  public searchLocksmiths(
    @Args('searchValue', { nullable: true }) searchValue: string,
    @Args('skip', { nullable: true }) skip: number,
    @Args('first', { nullable: true }) first: number,
  ) {
    return this.formMemberService.searchLocksmiths(searchValue, first, skip);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Request)
  public editRequest(
    @Args('updateRequestDto', { type: () => UpdateRequestDto })
    updateRequestDto: UpdateRequestDto,
  ) {
    return this.formMemberService.editRequest(updateRequestDto);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Locksmith)
  public editLocksmith(
    @Args('updateLocksmithDto', { type: () => UpdateLocksmithDto })
    updateLocksmithDto: UpdateLocksmithDto,
  ) {
    return this.formMemberService.editLocksmith(updateLocksmithDto);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SendDto)
  public deleteRequestById(@Args('id') id: string) {
    return this.formMemberService.deleteRequestById(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SendDto)
  public deleteLocksmithById(@Args('id') id: string) {
    return this.formMemberService.deleteLocksmithById(id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Request)
  public getRequestById(@Args('id') id: string) {
    return this.formMemberService.getRequestById(id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Locksmith)
  public getLocksmithById(@Args('id') id: string) {
    return this.formMemberService.getLocksmithById(id);
  }

  @Mutation(() => String)
  @UsePipes(FileInArgsPipe)
  public async uploadFileToRequest(
    @Args() { request_id, file }: UploadFileToRequestArgs,
  ) {
    return await this.formMemberService.uploadFileToRequestGql(
      file,
      request_id,
    );
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => String)
  @UsePipes(FileInArgsPipe)
  public async uploadFileToLocksmith(
    @Args() { file, locksmith_id }: UploadFileToLocksmithArgs,
  ) {
    return await this.formMemberService.uploadFileToLocksmithGql(
      file,
      locksmith_id,
    );
  }

  @Mutation(() => Reviews)
  public createReviews(
    @Args('createReviewsDto') createReviewsDto: CreateReviewsDto,
  ): Promise<Reviews> {
    return this.formMemberService.createReviews(createReviewsDto);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => [ReviewsWithEmailDto])
  public reviewReviews(
    @Args('reviewReviewsDto', { type: () => [ReviewReviewsDto] })
    review_reviews_dto: ReviewReviewsDto[],
  ): Promise<ReviewsWithEmailDto[]> {
    return this.formMemberService.reviewReviews(review_reviews_dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [ReviewsWithEmailDto])
  public getReviewsForConsideration(): Promise<ReviewsWithEmailDto[]> {
    return this.formMemberService.getReviewsForConsideration();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [LocksmithWithCountNewReviewsDto])
  public getLocksmithWithUnreviewedReviews() {
    return this.formMemberService.getLocksmithWithUnreviewedReviews();
  }
}
