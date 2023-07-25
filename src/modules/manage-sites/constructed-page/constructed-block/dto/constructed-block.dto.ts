import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { ConstructedBlock } from '../entity/constructed-block.entity';
import {
  ConstructedPhotoDto,
  UpdateConstructedPhotoDto,
} from '../../constructed-photo/dto/constructed-photo.dto';

@InputType()
export class ConstructedBlockInput extends OmitType(ConstructedBlock, [
  'constructed_page',
  'photo',
]) {}

@InputType()
export class ConstructedBlockDto extends OmitType(ConstructedBlockInput, [
  'id',
  'constructed_photo_id',
  'constructed_page_id',
]) {
  @Field(() => ConstructedPhotoDto, { nullable: true })
  photo?: ConstructedPhotoDto;
}

@InputType()
export class UpdateOrCreateConstructedBlockDto extends PartialType(
  OmitType(ConstructedBlockInput, [
    'constructed_photo_id',
    'constructed_page_id',
  ]),
) {
  @Field(() => UpdateConstructedPhotoDto, { nullable: true })
  photo?: UpdateConstructedPhotoDto;
}
