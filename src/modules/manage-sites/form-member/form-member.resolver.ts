import { UsePipes } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLocksmithDto } from './dto/create-locksmith.dto';
import { CreateRequestDto } from './dto/create-request.dto';
import { LocksmithOld } from './entity/locksmith.entity';
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
import { UploadFileToLocksmithArgs } from './args/upload-file-to-locksmith.args';
import { UploadFileToRequestArgs } from './args/upload-file-to-request.args';
import { FileInArgsPipe } from 'src/modules/upload/pipe/check-file-size-in-args.pipe';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { SearchLocksmithDto } from './dto/search-locksmith.dto';
import { LocksmithsWithCount } from './dto/locksmith-with-count.dto';

@Resolver()
export class FormMemberResolver {
  constructor(private readonly formMemberService: FormMemberService) {}

  // @Mutation(() => Request)
  // public createRequest(
  //   @Args('createRequestDto', { type: () => CreateRequestDto })
  //   createRequestDto: CreateRequestDto,
  // ) {
  //   return this.formMemberService.createRequest(createRequestDto);
  // }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  // @Mutation(() => LocksmithOld)
  // public createLocksmith(
  //   @Args('createLocksmithDto', { type: () => CreateLocksmithDto })
  //   createLocksmithDto: CreateLocksmithDto,
  // ) {
  //   return this.formMemberService.createLocksmith(createLocksmithDto);
  // }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  // @Query(() => [Request])
  // public searchRequests(
  //   @Args('searchValue', { nullable: true }) searchValue: string,
  //   @Args('skip', { nullable: true }) skip: number,
  //   @Args('first', { nullable: true }) first: number,
  // ) {
  //   return this.formMemberService.searchRequests(searchValue, first, skip);
  // }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  // @Query(() => LocksmithsWithCount)
  // public searchLocksmiths(
  //   @Args('options') { searchValue, skip, first }: SearchLocksmithDto,
  // ) {
  //   return this.formMemberService.searchLocksmiths(searchValue, first, skip);
  // }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  // @Mutation(() => Request)
  // public editRequest(
  //   @Args('updateRequestDto', { type: () => UpdateRequestDto })
  //   updateRequestDto: UpdateRequestDto,
  // ) {
  //   return this.formMemberService.editRequest(updateRequestDto);
  // }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  // @Mutation(() => LocksmithOld)
  // public editLocksmith(
  //   @Args('updateLocksmithDto', { type: () => UpdateLocksmithDto })
  //   updateLocksmithDto: UpdateLocksmithDto,
  // ) {
  //   return this.formMemberService.editLocksmith(updateLocksmithDto);
  // }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  // @Mutation(() => SendDto)
  // public deleteRequestById(@Args('id') id: string) {
  //   return this.formMemberService.deleteRequestById(id);
  // }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  // @Mutation(() => SendDto)
  // public deleteLocksmithById(@Args('id') id: string) {
  //   return this.formMemberService.deleteLocksmithById(id);
  // }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  // @Query(() => Request)
  // public getRequestById(@Args('id') id: string) {
  //   return this.formMemberService.getRequestById(id);
  // }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  // @Query(() => LocksmithOld)
  // public getLocksmithById(@Args('id') id: string) {
  //   return this.formMemberService.getLocksmithById(id);
  // }

  // @Mutation(() => String)
  // @UsePipes(FileInArgsPipe)
  // public async uploadFileToRequest(
  //   @Args() { request_id, file }: UploadFileToRequestArgs,
  // ) {
  //   return await this.formMemberService.uploadFileToRequestGql(
  //     file,
  //     request_id,
  //   );
  // }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  // @Mutation(() => String)
  // @UsePipes(FileInArgsPipe)
  // public async uploadFileToLocksmith(
  //   @Args() { file, locksmith_id }: UploadFileToLocksmithArgs,
  // ) {
  //   return await this.formMemberService.uploadFileToLocksmithGql(
  //     file,
  //     locksmith_id,
  //   );
  // }

  // @Mutation(() => Reviews)
  // public createReviews(
  //   @Args('createReviewsDto') createReviewsDto: CreateReviewsDto,
  // ): Promise<Reviews> {
  //   return this.formMemberService.createReviews(createReviewsDto);
  // }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  // @Mutation(() => [ReviewsWithEmailDto])
  // public reviewReviews(
  //   @Args('reviewReviewsDto', { type: () => [ReviewReviewsDto] })
  //   review_reviews_dto: ReviewReviewsDto[],
  // ): Promise<ReviewsWithEmailDto[]> {
  //   return this.formMemberService.reviewReviews(review_reviews_dto);
  // }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  // @Query(() => [ReviewsWithEmailDto])
  // public getReviewsForConsideration(): Promise<ReviewsWithEmailDto[]> {
  //   return this.formMemberService.getReviewsForConsideration();
  // }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  // @Query(() => [LocksmithWithCountNewReviewsDto])
  // public getLocksmithWithUnreviewedReviews() {
  //   return this.formMemberService.getLocksmithWithUnreviewedReviews();
  // }
}
