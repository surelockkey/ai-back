import { Field, ID, InputType, PartialType, OmitType } from '@nestjs/graphql';
import { BlogBlock } from '../entity/blog-block.entity';
import { BlogMetaInfo } from '../entity/blog-meta-info.entity';
import { BlogPreview } from '../entity/blog-preview.entity';
import { PhotoForBlock } from '../entity/blog-photo.entity';

@InputType()
export class UpdatePhotoForBlockDto extends PartialType(
  PhotoForBlock,
  InputType,
) {}

@InputType()
export class UpdateBlogBlockDto extends PartialType(
  OmitType(BlogBlock, ['photo'] as const),
  InputType,
) {
  @Field(() => UpdatePhotoForBlockDto, { nullable: true })
  photo?: UpdatePhotoForBlockDto;
}

@InputType()
export class UpdateBlogMetaInfoDto extends PartialType(
  BlogMetaInfo,
  InputType,
) {}

@InputType()
export class UpdateBlogPreviewDto extends PartialType(
  OmitType(BlogPreview, ['photo'] as const),
  InputType,
) {
  @Field(() => UpdatePhotoForBlockDto, { nullable: true })
  photo?: UpdatePhotoForBlockDto;
}

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
