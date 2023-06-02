import { registerEnumType } from '@nestjs/graphql';

export enum FilterableLocationEnum {
  id = 'id',
  Title = 'Title',
  Url = 'Url',
  Description = 'Description',
  H1 = 'H1',
  Subtitle = 'Subtitle',
  Map_link = 'Map_link',
  Rich_template = 'Rich_template',
  Phone_number = 'Phone_number',
  published_at = 'published_at',
  created_at = 'created_at',
  updated_at = 'updated_at',
  Name = 'Name',
  State = 'State',
  // About_us_H2 = 'About_us.H2',
  // About_us_Text = 'About_us.Text',
  // Prices_H2 = 'Prices.H2',
  // Prices_Text = 'Prices.Text',
  // Prices_list_name = 'Prices.list.name',
  // Prices_list_price = 'Prices.list.price',
  // Prices_description_right = 'Prices.description_right',
}

registerEnumType(FilterableLocationEnum, {
  name: 'FilterableLocationEnum',
  description: 'Chouse which type of sorting would you like to use',
  valuesMap: {
    id: {
      description: 'filter by id',
    },
    Title: {
      description: 'filter by title',
    },
    Url: {
      description: 'filter by Url ',
    },
    Description: {
      description: 'filter by Description',
    },
    H1: {
      description: 'filter by H1',
    },
    Subtitle: {
      description: 'filter by Subtitle',
    },
    Map_link: {
      description: 'filter by Map_link',
    },
    Rich_template: {
      description: 'filter by Rich_template',
    },
    Phone_number: {
      description: 'filter by Phone_number',
    },
    published_at: {
      description: 'filter by published_at',
    },
    created_at: {
      description: 'filter by created_at',
    },
    updated_at: {
      description: 'filter by updated_at',
    },
    Name: {
      description: 'filter by Name',
    },
    State: {
      description: 'filter by State',
    },
  },
});
