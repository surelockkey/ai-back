import { registerEnumType } from '@nestjs/graphql';

export enum LogGroup {
  DEVELOPER = 'developer',
  USER = 'user',
}

registerEnumType(LogGroup, { name: 'LogGroup' });
