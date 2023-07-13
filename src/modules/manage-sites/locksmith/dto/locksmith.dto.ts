import {
  Field,
  InputType,
  IntersectionType,
  ObjectType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { Locksmith } from '../entity/locksmith.entity';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { FileUpload } from 'graphql-upload';
import {
  LocksmithScheduleDto,
  UpdateLocksmithScheduleDto,
} from '../locksmith-schedule/dto/locksmith-schedule.dto';

@InputType()
export class LocksmithInput extends OmitType(Locksmith, [
  'schedules',
  'reviews',
  'file_id',
]) {}

@InputType()
export class RequestLocksmithDto extends OmitType(LocksmithInput, [
  'id',
  'priority',
  'is_verified',
  'confirmed',
]) {
  @Field(() => GraphQLUpload, { nullable: true })
  file?: Promise<FileUpload>;

  @Field(() => [LocksmithScheduleDto])
  schedules: LocksmithScheduleDto[];
}

@InputType()
export class CreateLocksmithDto extends OmitType(LocksmithInput, ['id']) {
  @Field(() => GraphQLUpload, { nullable: true })
  file?: Promise<FileUpload>;

  @Field(() => [LocksmithScheduleDto])
  schedules: LocksmithScheduleDto[];
}

@InputType()
export class UpdateLocksmithDto extends IntersectionType(
  PartialType(OmitType(LocksmithInput, ['id'])),
  PickType(LocksmithInput, ['id']),
) {
  @Field(() => GraphQLUpload, { nullable: true })
  file?: Promise<FileUpload>;

  @Field(() => [UpdateLocksmithScheduleDto], { nullable: true })
  schedules?: UpdateLocksmithScheduleDto[];
}

@ObjectType()
export class LocksmithWithCountNewReviewsDto extends Locksmith {
  @Field(() => Number)
  count_new_reviews: number;
}
