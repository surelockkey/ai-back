import { registerEnumType } from '@nestjs/graphql';

export enum Account {
  main = 'main',
  arizona = 'arizona',
}

registerEnumType(Account, { name: 'Account' });
