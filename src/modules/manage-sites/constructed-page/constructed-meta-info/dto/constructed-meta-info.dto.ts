import { InputType, OmitType } from '@nestjs/graphql';
import { ConstructedMetaInfo } from '../entity/constructed-meta-info.entity';

@InputType()
export class ConstructedMetaInfoInput extends OmitType(ConstructedMetaInfo, [
  'constructed_page',
]) {}

@InputType()
export class ConstructedMetaInfoDto extends OmitType(ConstructedMetaInfoInput, [
  'id',
  'constructed_page_id',
]) {}
