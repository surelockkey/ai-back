import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { BlogBlock } from '../../Entity/blog-block.entity';
import { UpdatePhotoForBlockDto } from './update-photo-for-blog.dto';

@InputType()
export class UpdateBlogBlockDto extends PartialType(
  OmitType(BlogBlock, ['photo'] as const),
  InputType,
) {
  @Field(() => UpdatePhotoForBlockDto, { nullable: true })
  photo?: UpdatePhotoForBlockDto;
}
