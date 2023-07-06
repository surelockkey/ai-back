import { Field, InputType, OmitType } from '@nestjs/graphql';
import { InventoryRequestInvoice } from '../entity/inventory-request-invoice.entity';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { FileUpload } from 'graphql-upload';
import { TechInventoryItemDto } from '../../tech-inventory-item/dto/tech-inventory-item.dto';

@InputType()
export class InventoryRequestInvoiceInput extends OmitType(
  InventoryRequestInvoice,
  ['file', 'inventory_request', 'tech_items'],
) {}

@InputType()
export class InventoryRequestInvoiceDto extends OmitType(
  InventoryRequestInvoiceInput,
  ['inventory_request_id', 'file_id', 'id'],
) {
  @Field(() => GraphQLUpload)
  file: Promise<FileUpload>;

  @Field(() => [TechInventoryItemDto])
  tech_items: TechInventoryItemDto[];
}
