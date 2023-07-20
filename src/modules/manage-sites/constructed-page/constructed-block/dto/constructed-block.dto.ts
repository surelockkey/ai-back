import { Field, InputType, OmitType } from '@nestjs/graphql';
import { ConstructedBlock } from '../entity/constructed-block.entity';
import { ConstructedPhotoDto } from '../../constructed-photo/dto/constructed-photo.dto';

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
