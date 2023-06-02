import { registerEnumType } from '@nestjs/graphql';

export enum TableName {
  LOCATION = 'Location',
  CONSTRUCTOR_BLOG = 'ConstructorBlog',
  PREVIEW_INFO_INDIVIDUAL = 'PreviewInfoIndividual',
  LOCATION_PHOTO = 'LocationPhoto',
  PHOTO_BLOG = 'PhotoBlog',
  CONTACT = 'Contact',
  STATISTICS_COUNTER = 'StatisticsCounter',
}

registerEnumType(TableName, { name: 'TableName' });
