import { ObjectType } from '@nestjs/graphql';
import { PaginateResult } from 'src/core/dto/pagination.dto';
import { InventoryRequest } from '../entity/inventory-request.entity';

@ObjectType()
export class PaginatedInventoryRequests extends PaginateResult(
  InventoryRequest,
) {}
