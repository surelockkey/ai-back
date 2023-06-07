import { Field, ID, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { LocationThumbnail } from '../entity/location-thumbnail.entity';
import { LocationPrices } from '../entity/location-prices.entity';
import { LocationServices } from '../entity/location-services.entity';
import { LocationTestimonials } from '../entity/location-testimonials.entity';
import { H2Text } from '../entity/h2-text.entity';
import { LocationPricesList } from '../entity/location-prices-list.entity';
import { TestimonialsReviews } from '../entity/testimonials-reviews.entity';

@InputType()
export class UpdateH2TextDto extends PartialType(H2Text, InputType) {}

@InputType()
export class UpdateLocationThumbnailDto extends PartialType(
  OmitType(LocationThumbnail, ['created_at', 'updated_at']),
  InputType,
) {}

@InputType()
export class UpdateLocationPricesListDto extends PartialType(
  LocationPricesList,
  InputType,
) {}

@InputType()
export class UpdateLocationPricesDto extends PartialType(
  OmitType(LocationPrices, ['list'] as const),
  InputType,
) {
  @Field(() => [UpdateLocationPricesListDto], { nullable: true })
  list?: UpdateLocationPricesListDto[];
}

@InputType()
export class UpdateLocationServicesDto extends PartialType(
  LocationServices,
  InputType,
) {}

@InputType()
export class UpdateTestimonialsReviewsDto extends PartialType(
  TestimonialsReviews,
  InputType,
) {}

@InputType()
export class UpdateLocationTestimonialsDto extends PartialType(
  OmitType(LocationTestimonials, ['Reviews'] as const),
  InputType,
) {
  @Field(() => [UpdateTestimonialsReviewsDto], { nullable: true })
  Reviews?: UpdateTestimonialsReviewsDto[];
}

@InputType()
export class UpdateLocationDto {
  @Field(() => ID)
  id: string;

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

  @Field(() => Number, { nullable: true })
  updated_at?: number;

  @Field(() => String, { nullable: true })
  Name?: string;

  @Field(() => String, { nullable: true })
  State?: string;

  @Field(() => UpdateH2TextDto, { nullable: true })
  About_us?: UpdateH2TextDto;

  @Field(() => UpdateLocationPricesDto, { nullable: true })
  Prices?: UpdateLocationPricesDto;

  @Field(() => UpdateLocationTestimonialsDto, { nullable: true })
  Testimonials?: UpdateLocationTestimonialsDto;

  @Field(() => UpdateH2TextDto, { nullable: true })
  About_city?: UpdateH2TextDto;

  @Field(() => UpdateLocationServicesDto, { nullable: true })
  Our_services?: UpdateLocationServicesDto;

  @Field(() => UpdateLocationServicesDto, { nullable: true })
  Hour_24_services?: UpdateLocationServicesDto;

  @Field(() => UpdateLocationThumbnailDto, { nullable: true })
  Thumbnail?: UpdateLocationThumbnailDto;

  @Field(() => UpdateLocationThumbnailDto, { nullable: true })
  Photo?: UpdateLocationThumbnailDto;
}
