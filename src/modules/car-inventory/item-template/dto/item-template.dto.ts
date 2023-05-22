import { InputType, OmitType } from '@nestjs/graphql';
import { ItemTemplate } from '../entity/item-template.entity';

@InputType()
export class ItemTemplateInput extends ItemTemplate {}

@InputType()
export class UpdateItemTemplateDto extends OmitType(ItemTemplateInput, ['workiz_id']) {}

@InputType()
export class CreateItemTemplateDto extends OmitType(ItemTemplateInput, ['id']) {}