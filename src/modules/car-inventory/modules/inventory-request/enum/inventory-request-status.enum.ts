import { registerEnumType } from '@nestjs/graphql';

export enum InventoryRequestStatus {
  REQUESTED = 'REQUESTED',
  APPROVED_BY_TECH = 'APPROVED_BY_TECH',
  APPROVED_BY_LOGIST = 'APPROVED_BY_LOGIST',
}

registerEnumType(InventoryRequestStatus, {
  name: 'InventoryRequestStatus',
});
