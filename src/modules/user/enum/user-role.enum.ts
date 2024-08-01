import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  ADMIN = 'ADMIN',
  MAIN_DISPATCHER = 'MAIN_DISPATCHER',
  DISPATCHER = 'DISPATCHER',
  TECHNICIAN = 'TECHNICIAN',
  SEO = 'SEO',
  LOGISTIC = 'LOGISTIC',
  CUSTOMER = 'CUSTOMER',
  MANAGER = 'MANAGER',
  HR = 'HR',
  MARKETING = 'MARKETING',
}

registerEnumType(UserRole, { name: 'UserRole' });
