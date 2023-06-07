import {
  CreateH2TextDto,
  CreateLocationPricesDto,
  CreateLocationServicesDto,
  CreateLocationTestimonialsDto,
  CreateLocationThumbnailDto,
} from '../../location/dto/create-location.dto';

// TODO: Add H2

export class LocationRelationsDto {
  About_us: CreateH2TextDto;
  Prices: CreateLocationPricesDto;
  Testimonials: CreateLocationTestimonialsDto;
  About_city: CreateH2TextDto;
  Our_services: CreateLocationServicesDto;
  Hour_24_services: CreateLocationServicesDto;
  Thumbnail: CreateLocationThumbnailDto;
  Photo: CreateLocationThumbnailDto;
}
