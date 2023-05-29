import { InputType, OmitType } from '@nestjs/graphql';
import { CarTemplate } from '../entity/car-template.entity';

@InputType()
export class CarTemplateInput extends CarTemplate {}

@InputType()
export class UpdateCarTemplateDto extends OmitType(CarTemplateInput, ['template']) {}

@InputType()
export class CreateCarTemplateDto extends OmitType(CarTemplateInput, ['id', 'template']) {}