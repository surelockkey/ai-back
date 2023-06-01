import { InputType, PartialType } from '@nestjs/graphql';
import { BlogMetaInfo } from '../../Entity/blog-meta-info.entity';

@InputType()
export class UpdateBlogMetaInfoDto extends PartialType(
  BlogMetaInfo,
  InputType,
) {}
