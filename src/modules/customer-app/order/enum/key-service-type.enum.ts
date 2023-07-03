import { registerEnumType } from '@nestjs/graphql';

export enum KeyServiceType {
  NEW_CAR_KEY = 'NEW_CAR_KEY',
  CAR_KEY_COPY = 'CAR_KEY_COPY',
  CAR_KEY_POGROMING = 'CAR_KEY_POGROMING',
  IGNITION_CHANGE_REPAIR = 'IGNITION_CHANGE_REPAIR ',
}

registerEnumType(KeyServiceType, { name: 'KeyServiceType' });
