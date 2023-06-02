import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { BlogBlock } from '../entity/blog-block.entity.js';
import { BlogMetaInfo } from '../entity/blog-meta-info.entity.js';
import { BlogPreview } from '../entity/blog-preview.entity.js';
import { PhotoForBlock } from '../entity/blog-photo.entity.js';

@InputType()
export class CreatePhotoForBlockDto extends PartialType(
  OmitType(PhotoForBlock, ['id'] as const),
  InputType,
) {}

@InputType()
export class CreateBlogBlockDto extends PartialType(
  OmitType(BlogBlock, ['id', 'photo']),
  InputType,
) {
  @Field(() => CreatePhotoForBlockDto, { nullable: true })
  photo?: CreatePhotoForBlockDto;
}

@InputType()
export class CreateBlogMetaInfoDto extends PartialType(
  OmitType(BlogMetaInfo, ['id']),
  InputType,
) {}

@InputType()
export class CreateBlogPreviewDto extends PartialType(
  OmitType(BlogPreview, ['id', 'photo']),
  InputType,
) {
  @Field(() => CreatePhotoForBlockDto, { nullable: true })
  photo?: CreatePhotoForBlockDto;
}

@InputType()
export class CreateConstructorBlogDto {
  @Field(() => Number, { nullable: true })
  post_date?: number;

  @Field(() => Number, { nullable: true })
  post_date_future?: number;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  is_posted?: boolean;

  @Field(() => CreateBlogMetaInfoDto, { nullable: true })
  metaInfo?: CreateBlogMetaInfoDto;

  @Field(() => CreateBlogPreviewDto, { nullable: true })
  preview_info?: CreateBlogPreviewDto;

  @Field(() => [CreateBlogBlockDto], { nullable: true })
  blocks?: CreateBlogBlockDto[];
}
