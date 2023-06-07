import { registerEnumType } from '@nestjs/graphql';

export enum ReviewsStatus {
  APPROVED = 'Approved',
  UNDER_CONSIDERATION = 'Under consideration',
  REJECTED = 'Rejected',
}

registerEnumType(ReviewsStatus, { name: 'ReviewsStatus' });
