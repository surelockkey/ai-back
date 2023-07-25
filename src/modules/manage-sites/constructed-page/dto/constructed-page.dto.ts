import {
  Field,
  ID,
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { ConstructedPage } from '../entity/constructed-page.entity';
import {
  ConstructedBlockDto,
  UpdateOrCreateConstructedBlockDto,
} from '../constructed-block/dto/constructed-block.dto';
import {
  ConstructedMetaInfoDto,
  UpdateConstructedMetaInfoDto,
} from '../constructed-meta-info/dto/constructed-meta-info.dto';
import {
  ConstructedPreviewDto,
  UpdateConstructedPreviewDto,
} from '../constructed-preview/dto/constructed-preview.dto';

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

@InputType()
export class UpdateConstructedPageDto extends IntersectionType(
  PickType(ConstructedPageInput, ['id']),
  PartialType(OmitType(ConstructedPageInput, ['id'])),
) {
  @Field(() => UpdateConstructedPreviewDto, { nullable: true })
  preview?: UpdateConstructedPreviewDto;

  @Field(() => UpdateConstructedMetaInfoDto, { nullable: true })
  meta_info?: UpdateConstructedMetaInfoDto;

  @Field(() => [UpdateOrCreateConstructedBlockDto], { nullable: true })
  blocks: UpdateOrCreateConstructedBlockDto[];

  @Field(() => [ID], { nullable: true })
  delete_blocks_ids?: string[];
}
