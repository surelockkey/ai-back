import { Resolver } from '@nestjs/graphql';
import { InventoryRequestInvoiceService } from './inventory-request-invoice.service';

@Resolver()
export class InventoryRequestInvoiceResolver {
  constructor(
    private readonly inventoryRequestInvoiceService: InventoryRequestInvoiceService,
  ) {}
}
