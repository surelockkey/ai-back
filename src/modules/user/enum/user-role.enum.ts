import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
    ADMIN = 'admin',
}

registerEnumType(UserRole, { name: 'UserRole' });
