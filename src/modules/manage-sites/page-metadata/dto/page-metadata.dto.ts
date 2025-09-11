import {
  Field,
  ID,
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { PageMetadata } from '../entity/page-metadata.entity';

@InputType()
export class PageMetadataInput extends OmitType(PageMetadata, [
  'constructed_page_company',
]) {}

@InputType()
export class CreatePageMetadataDto extends OmitType(PageMetadataInput, [
  'id',
]) {}

@InputType()
export class CreateManyPageMetadataDto {
  @Field(() => [CreatePageMetadataDto])
  metadata: CreatePageMetadataDto[];
}

@InputType()
export class UpdatePageMetadataDto extends IntersectionType(
  PickType(PageMetadataInput, ['id']),
  PartialType(OmitType(PageMetadataInput, ['id'])),
) {}
