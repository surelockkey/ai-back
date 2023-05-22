import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CarInventory } from '../entity/car-inventory.entity';

@InputType()
export class CarInventoryInput extends OmitType(CarInventory, [
  'item_templates',
]) {}

@InputType()
export class CreateCarInventoryDto extends OmitType(CarInventoryInput, [
  'id',
]) {}

@InputType()
export class UpdateCarInventoryDto extends IntersectionType(
  PickType(CarInventoryInput, ['id']),
  PartialType(OmitType(CarInventoryInput, ['id'])),
) {}
