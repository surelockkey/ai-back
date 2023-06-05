import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  ADMIN = 'ADMIN',
  MAIN_DISPATCHER = 'MAIN_DISPATCHER',
  DISPATCHER = 'DISPATCHER',
  TECHNICIAN = 'TECHNICIAN',
}

registerEnumType(UserRole, { name: 'UserRole' });
