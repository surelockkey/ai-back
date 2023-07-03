import { Resolver } from '@nestjs/graphql';
import { TechInventoryItemService } from './tech-inventory-item.service';

@Resolver()
export class TechInventoryItemResolver {
  constructor(
    private readonly techInventoryItemService: TechInventoryItemService,
  ) {}
}
