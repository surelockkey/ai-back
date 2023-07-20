import { Field, InputType, OmitType } from '@nestjs/graphql';
import { ConstructedPreview } from '../entity/constructed-preview.entity';
import { ConstructedPhotoDto } from '../../constructed-photo/dto/constructed-photo.dto';

@InputType()
export class ConstructedPreviewInput extends OmitType(ConstructedPreview, [
  'constructed_page',
  'photo',
]) {}

@InputType()
export class ConstructedPreviewDto extends OmitType(ConstructedPreviewInput, [
  'id',
  'constructed_page_id',
  'constructed_photo_id',
]) {
  @Field(() => ConstructedPhotoDto, { nullable: true })
  photo?: ConstructedPhotoDto;
}
