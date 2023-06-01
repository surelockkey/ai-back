import { Field, ID, InputType } from '@nestjs/graphql';
import {
  UpdateBlogBlockDto,
  UpdateBlogMetaInfoDto,
  UpdateBlogPreviewDto,
} from './update-constructor-blog-relations-dto';

@InputType()
export class UpdateConstructorBlogDto {
  @Field(() => ID)
  id: string;

  @Field(() => Number, { nullable: true })
  post_date?: number;

  @Field(() => Number, { nullable: true })
  post_date_future?: number;

  @Field(() => Boolean, { nullable: true })
  is_posted?: boolean;

  @Field(() => UpdateBlogMetaInfoDto, { nullable: true })
  metaInfo?: UpdateBlogMetaInfoDto;

  @Field(() => UpdateBlogPreviewDto, { nullable: true })
  preview_info?: UpdateBlogPreviewDto;

  @Field(() => [UpdateBlogBlockDto], { nullable: true })
  blocks?: UpdateBlogBlockDto[];
}
