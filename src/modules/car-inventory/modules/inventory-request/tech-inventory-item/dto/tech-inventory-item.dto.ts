import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { TechInventoryItem } from '../entity/tech-inventory-item.entity';

@InputType()
export class TechInventoryItemInput extends OmitType(TechInventoryItem, [
  'inventory_request',
  'request_invoice',
]) {}

@InputType()
export class TechInventoryItemDto extends OmitType(TechInventoryItemInput, [
  'id',
  'inventory_request_id',
  'request_invoice_id',
]) {}

@InputType()
export class UpdateTechInventoryItemDto extends IntersectionType(
  PickType(TechInventoryItemInput, ['id']),
  PartialType(
    OmitType(TechInventoryItemInput, [
      'inventory_request_id',
      'request_invoice_id',
      'id',
    ]),
  ),
) {}
