import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InventoryRequestService } from './inventory-request.service';
import { InventoryRequest } from './entity/inventory-request.entity';
import {
  AcceptInventoryRequestByLogistDto,
  AcceptInventoryRequestByTechDto,
  CreateInventoryRequestDto,
} from './dto/inventory-request.dto';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { PaginatedInventoryRequests } from './dto/paginated-inventory-requests.dto';
import { FindPaginationDto } from 'src/core/dto/pagination.dto';

@Resolver()
export class InventoryRequestResolver {
  constructor(
    private readonly inventoryRequestService: InventoryRequestService,
  ) {}

  @RoleGuard(UserRole.ADMIN, UserRole.LOGISTIC)
  @Mutation(() => InventoryRequest)
  createInventoryRequest(
    @Args('inventory_request_dto', { type: () => CreateInventoryRequestDto })
    inventory_request_dto: CreateInventoryRequestDto,
  ) {
    return this.inventoryRequestService.createInventoryRequest(
      inventory_request_dto,
    );
  }

  @RoleGuard(UserRole.ADMIN, UserRole.TECHNICIAN)
  @Mutation(() => InventoryRequest)
  acceptInventoryRequestByTech(
    @Args('inventory_request', { type: () => AcceptInventoryRequestByTechDto })
    inventory_request: AcceptInventoryRequestByTechDto,
  ) {
    return this.inventoryRequestService.acceptInventoryRequestByTech(
      inventory_request,
    );
  }

  @RoleGuard(UserRole.ADMIN, UserRole.LOGISTIC)
  @Mutation(() => InventoryRequest)
  acceptInventoryRequestByLogist(
    @Args('inventory_request', {
      type: () => AcceptInventoryRequestByLogistDto,
    })
    inventory_request: AcceptInventoryRequestByLogistDto,
  ) {
    return this.inventoryRequestService.acceptInventoryRequestByLogist(
      inventory_request,
    );
  }

  @RoleGuard(UserRole.ADMIN, UserRole.LOGISTIC)
  @Query(() => InventoryRequest)
  getInventoryRequestById(@Args('id', { type: () => ID }) id: string) {
    return this.inventoryRequestService.findOneById(id);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.LOGISTIC)
  @Query(() => PaginatedInventoryRequests)
  getInventoryRequests(
    @Args('pagination', { type: () => FindPaginationDto })
    pagination: FindPaginationDto,
  ): Promise<PaginatedInventoryRequests> {
    return this.inventoryRequestService.getInventoryRequests(pagination);
  }
}
