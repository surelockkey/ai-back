import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { BlogPreview } from '../../Entity/blog-preview.entity';
import { UpdatePhotoForBlockDto } from './update-photo-for-blog.dto';

@InputType()
export class UpdateBlogPreviewDto extends PartialType(
  OmitType(BlogPreview, ['photo'] as const),
  InputType,
) {
  @Field(() => UpdatePhotoForBlockDto, { nullable: true })
  photo?: UpdatePhotoForBlockDto;
}
