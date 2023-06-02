import { registerEnumType } from '@nestjs/graphql';

export enum FilterableBlogEnum {
  post_date = 'constructor_blog.post_date',
  is_posted = 'constructor_blog.is_posted',
  meta_tag_description = 'meta_info.meta_tag_description',
  meta_tag_title = 'meta_info.meta_tag_title ',
  date_when_will_post_blog = 'meta_info.date_when_will_post_blog',
  blog_previw_date = 'preview_info.date',
}

registerEnumType(FilterableBlogEnum, {
  name: 'SortBlogField',
  description: 'Chouse which type of sorting would you like to use',
  valuesMap: {
    post_date: {
      description: 'filter by post date',
    },
    is_posted: {
      description: 'filter by is posted ',
    },
    meta_tag_description: {
      description: 'filter by meta tag description',
    },
    meta_tag_title: {
      description: 'filter by meta tag title',
    },
    date_when_will_post_blog: {
      description: 'filter by blog Meta info date_when_will_post_blog',
    },
    blog_previw_date: {
      description: 'filter by preview info date',
    },
  },
});
