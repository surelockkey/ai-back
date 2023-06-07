import { Field, InputType, OmitType } from '@nestjs/graphql';
import { Template } from '../entity/template.entity';

@InputType()
export class TemplateInput extends Template {}

@InputType()
export class UpdateTemplateDto extends OmitType(TemplateInput, ['items', 'car_templates']) {}

@InputType()
export class CreateTemplateDto extends OmitType(TemplateInput, ['id', 'car_templates', 'items']) {

}