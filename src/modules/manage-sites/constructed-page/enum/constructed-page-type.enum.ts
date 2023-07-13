import { registerEnumType } from '@nestjs/graphql';

export enum ConstructedPageType {
  BLOG = 'BLOG',
  LOCATION = 'LOCATION',
}

registerEnumType(ConstructedPageType, { name: 'ConstructedPageType' });
