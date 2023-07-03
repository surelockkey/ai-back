import { Resolver } from '@nestjs/graphql';
import { LogistInventoryItemService } from './logist-inventory-item.service';

@Resolver()
export class LogistInventoryItemResolver {
  constructor(
    private readonly logistInventoryItemService: LogistInventoryItemService,
  ) {}
}
