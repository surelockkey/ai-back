import { registerEnumType } from '@nestjs/graphql';

export enum ChatType {
  DEFAULT = 'DEFAULT',
  WITH_API = 'WITH_API',
}

registerEnumType(ChatType, { name: 'ChatType' });
