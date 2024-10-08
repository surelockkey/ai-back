import { registerEnumType } from '@nestjs/graphql';

export enum ConstructedPageType {
  BLOG = 'BLOG',
  LOCATION = 'LOCATION',
  VACANCY = 'VACANCY',
}

registerEnumType(ConstructedPageType, { name: 'ConstructedPageType' });

// 94939c99-6cc6-4e42-938a-ff81f8afae61
// 1c62ca0c-c574-4bc6-8f7e-3c26b91d8f25
