import { Field, InputType, OmitType } from '@nestjs/graphql';
import { InventoryRequest } from '../entity/inventory-request.entity';
import { LogistInventoryItemDto } from '../logist-inventory-item/dto/logist-inventory-item.dto';
import { InventoryRequestInvoiceDto } from '../inventory-request-invoice/dto/inventory-request-invoice.dto';
import { UpdateTechInventoryItemDto } from '../tech-inventory-item/dto/tech-inventory-item.dto';

@InputType()
export class InventoryRequestInput extends OmitType(InventoryRequest, [
  'tech',
  'logist_items',
  'request_invoices',
  'tech_items',
  'created_at',
]) {}

@InputType()
export class CreateInventoryRequestDto extends OmitType(InventoryRequestInput, [
  'id',
  'status',
]) {
  @Field(() => [LogistInventoryItemDto])
  logist_items: LogistInventoryItemDto[];
}

@InputType()
export class AcceptInventoryRequestByTechDto extends OmitType(
  InventoryRequestInput,
  ['tech_id', 'status'],
) {
  @Field(() => [InventoryRequestInvoiceDto])
  request_invoices: InventoryRequestInvoiceDto[];
}

@InputType()
export class AcceptInventoryRequestByLogistDto extends OmitType(
  InventoryRequestInput,
  ['tech_id', 'status'],
) {
  @Field(() => [UpdateTechInventoryItemDto], { nullable: true })
  tech_items?: UpdateTechInventoryItemDto[];
}
