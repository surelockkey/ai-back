import { InputType, PartialType } from '@nestjs/graphql';
import { PhotoForBlock } from '../../Entity/blog-photo.entity';

@InputType()
export class UpdatePhotoForBlockDto extends PartialType(
  PhotoForBlock,
  InputType,
) {}
