import { registerEnumType } from '@nestjs/graphql';

export enum SortEnum {
  DESC = 'DESC',
  ASC = 'ASC',
}

registerEnumType(SortEnum, {
  name: 'SortEnum',
  description: 'Choose which type of sorting would you like to use',
  valuesMap: {
    DESC: {
      description:
        'Items are arranged from high to low or largest to smallest: 9 to 0,  and/or Z to A',
    },
    ASC: {
      description:
        'Items are arranged from lowest to highest value:  0 to 9, and/or A to Z',
    },
  },
});
