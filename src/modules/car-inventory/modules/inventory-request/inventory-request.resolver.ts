import { Resolver } from '@nestjs/graphql';
import { InventoryRequestService } from './inventory-request.service';

@Resolver()
export class InventoryRequestResolver {
  constructor(
    private readonly inventoryRequestService: InventoryRequestService,
  ) {}
}
