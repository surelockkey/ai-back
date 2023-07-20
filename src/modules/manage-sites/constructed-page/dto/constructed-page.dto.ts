import { Field, InputType, OmitType } from '@nestjs/graphql';
import { ConstructedPage } from '../entity/constructed-page.entity';
import { ConstructedBlockDto } from '../constructed-block/dto/constructed-block.dto';
import { ConstructedMetaInfoDto } from '../constructed-meta-info/dto/constructed-meta-info.dto';
import { ConstructedPreviewDto } from '../constructed-preview/dto/constructed-preview.dto';

@InputType()
export class ConstructedPageInput extends OmitType(ConstructedPage, [
  'blocks',
  'meta_info',
  'preview',
]) {}

@InputType()
export class CreateConstructedPageDto extends OmitType(ConstructedPageInput, [
  'id',
]) {
  @Field(() => [ConstructedBlockDto], { nullable: true })
  blocks?: ConstructedBlockDto[];

  @Field(() => ConstructedMetaInfoDto, { nullable: true })
  meta_info?: ConstructedMetaInfoDto;

  @Field(() => ConstructedPreviewDto, { nullable: true })
  preview?: ConstructedPreviewDto;
}
