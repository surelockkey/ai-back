import { registerEnumType } from '@nestjs/graphql';

export enum ServiceType {
  RESIDENTIAL = 'RESIDENTIAL',
  COMMERCIAL = 'COMMERCIAL',
  MOBILE = 'MOBILE',
  EMERGENCY = 'EMERGENCY',
  AUTOMOTIVE = 'AUTOMOTIVE',
  CAR_KEY_DUPLICATION = 'CAR_KEY_DUPLICATION',
  SAFES = 'SAFES',
  SECURITY = 'SECURITY',
}

registerEnumType(ServiceType, { name: 'ServiceType' });
