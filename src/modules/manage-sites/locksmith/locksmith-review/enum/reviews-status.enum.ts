import { registerEnumType } from '@nestjs/graphql';

export enum ReviewStatus {
  APPROVED = 'Approved',
  UNDER_CONSIDERATION = 'Under consideration',
  REJECTED = 'Rejected',
}

registerEnumType(ReviewStatus, { name: 'ReviewStatus' });
