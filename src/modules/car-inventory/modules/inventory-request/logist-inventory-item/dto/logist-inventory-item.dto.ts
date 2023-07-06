import { InputType, OmitType } from '@nestjs/graphql';
import { LogistInventoryItem } from '../entity/logist-inventory-item.entity';

@InputType()
export class LogistInventoryItemInput extends OmitType(LogistInventoryItem, [
  'inventory_request',
]) {}

@InputType()
export class LogistInventoryItemDto extends OmitType(LogistInventoryItemInput, [
  'id',
  'inventory_request_id',
]) {}
