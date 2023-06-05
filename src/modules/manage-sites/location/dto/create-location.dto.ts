import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import {
  UpdateH2TextDto,
  UpdateLocationServicesDto,
} from './update-location.dto';
import { LocationPrices } from '../entity/location-prices.entity';
import { LocationTestimonials } from '../entity/location-testimonials.entity';
import { LocationThumbnail } from '../entity/location-thumbnail.entity';
import { LocationPricesList } from '../entity/location-prices-list.entity';
import { TestimonialsReviews } from '../entity/testimonials-reviews.entity';

@InputType()
export class CreateH2TextDto extends PartialType(
  OmitType(UpdateH2TextDto, ['id'] as const),
) {}

@InputType()
export class CreateLocationPricesListDto extends PartialType(
  OmitType(LocationPricesList, ['id'] as const),
  InputType,
) {}

@InputType()
export class CreateLocationPricesDto extends PartialType(
  OmitType(LocationPrices, ['id', 'list'] as const),
  InputType,
) {
  @Field(() => [CreateLocationPricesListDto], { nullable: true })
  list?: CreateLocationPricesListDto[];
}

@InputType()
export class CreateLocationServicesDto extends PartialType(
  OmitType(UpdateLocationServicesDto, ['id']),
) {}

@InputType()
export class CreateTestimonialsReviewsDto extends PartialType(
  OmitType(TestimonialsReviews, ['id']),
  InputType,
) {}

@InputType()
export class CreateLocationTestimonialsDto extends PartialType(
  OmitType(LocationTestimonials, ['id', 'Reviews'] as const),
  InputType,
) {
  @Field(() => [CreateTestimonialsReviewsDto], { nullable: true })
  Reviews?: CreateTestimonialsReviewsDto[];
}

@InputType()
export class CreateLocationThumbnailDto extends PartialType(
  OmitType(LocationThumbnail, ['id', 'created_at', 'updated_at'] as const),
  InputType,
) {}

@InputType()
export class CreateLocationDto {
  @Field(() => String, { nullable: true })
  Title?: string;

  @Field(() => String, { nullable: true })
  Url?: string;

  @Field(() => String, { nullable: true })
  Description?: string;

  @Field(() => String, { nullable: true })
  H1?: string;

  @Field(() => String, { nullable: true })
  Subtitle?: string;

  @Field(() => String, { nullable: true })
  Map_link?: string;

  @Field(() => String, { nullable: true })
  Rich_template?: string;

  @Field(() => String, { nullable: true })
  Phone_number?: string;

  @Field(() => Number, { nullable: true })
  published_at?: number;

  @Field(() => String, { nullable: true })
  Name?: string;

  @Field(() => String, { nullable: true })
  State?: string;

  @Field(() => CreateH2TextDto, { nullable: true })
  About_us?: CreateH2TextDto;

  @Field(() => CreateLocationPricesDto, { nullable: true })
  Prices?: CreateLocationPricesDto;

  @Field(() => CreateLocationTestimonialsDto, { nullable: true })
  Testimonials?: CreateLocationTestimonialsDto;

  @Field(() => CreateH2TextDto, { nullable: true })
  About_city?: CreateH2TextDto;

  @Field(() => CreateLocationServicesDto, { nullable: true })
  Our_services?: CreateLocationServicesDto;

  @Field(() => CreateLocationServicesDto, { nullable: true })
  Hour_24_services?: CreateLocationServicesDto;

  @Field(() => CreateLocationThumbnailDto, { nullable: true })
  Thumbnail?: CreateLocationThumbnailDto;

  @Field(() => CreateLocationThumbnailDto, { nullable: true })
  Photo?: CreateLocationThumbnailDto;
}
