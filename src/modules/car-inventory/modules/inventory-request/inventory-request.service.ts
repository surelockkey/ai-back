import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { InventoryRequest } from './entity/inventory-request.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import {
  AcceptInventoryRequestByLogistDto,
  AcceptInventoryRequestByTechDto,
  CreateInventoryRequestDto,
} from './dto/inventory-request.dto';
import { GraphQLError } from 'graphql';
import { LogistInventoryItemService } from './logist-inventory-item/logist-inventory-item.service';
import { InventoryRequestStatus } from './enum/inventory-request-status.enum';
import { InventoryRequestInvoiceService } from './inventory-request-invoice/inventory-request-invoice.service';
import { TechInventoryItemService } from './tech-inventory-item/tech-inventory-item.service';
import { FindPaginationDto } from 'src/core/dto/pagination.dto';
import { PaginatedInventoryRequests } from './dto/paginated-inventory-requests.dto';

@Injectable()
export class InventoryRequestService extends CrudService<InventoryRequest> {
  constructor(
    @InjectRepository(InventoryRequest)
    private readonly inventoryRequestRepository: Repository<InventoryRequest>,
    @InjectDataSource() private readonly dataSource: DataSource,
    private readonly techInventoryItemService: TechInventoryItemService,
    private readonly logistInventoryItemService: LogistInventoryItemService,
    private readonly inventoryRequestInvoiceService: InventoryRequestInvoiceService,
  ) {
    super(inventoryRequestRepository);
  }

  public async createInventoryRequest(
    inventory_request_dto: CreateInventoryRequestDto,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const { logist_items, ...inventory_request } = inventory_request_dto;

      const created_inventory_request = await queryRunner.manager.save(
        InventoryRequest,
        { ...inventory_request, status: InventoryRequestStatus.REQUESTED },
      );

      await this.logistInventoryItemService.createManyLogistItemsTransactional(
        logist_items,
        created_inventory_request.id,
        queryRunner,
      );

      await queryRunner.commitTransaction();

      return this.findOneById(created_inventory_request.id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }

  public async acceptInventoryRequestByTech(
    inventory_request_dto: AcceptInventoryRequestByTechDto,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const { request_invoices, ...inventory_request } = inventory_request_dto;

      if (request_invoices && request_invoices.length) {
        await this.inventoryRequestInvoiceService.createManyInvoices(
          request_invoices,
          inventory_request.id,
          queryRunner,
        );
      }

      await queryRunner.manager.update(
        InventoryRequest,
        { id: inventory_request.id },
        { status: InventoryRequestStatus.APPROVED_BY_TECH },
      );

      await queryRunner.commitTransaction();

      return this.findOneById(inventory_request.id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }

  public async acceptInventoryRequestByLogist(
    inventory_request_dto: AcceptInventoryRequestByLogistDto,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const { tech_items, ...inventory_request } = inventory_request_dto;

      const current_request = await this.findOneById(inventory_request.id);

      if (current_request.status !== InventoryRequestStatus.APPROVED_BY_TECH) {
        throw new GraphQLError(`You can't accept this request`);
      }

      if (tech_items && tech_items.length) {
        await this.techInventoryItemService.saveManyTechItemsTransactional(
          tech_items,
          queryRunner,
        );
      }

      await queryRunner.manager.update(
        InventoryRequest,
        { id: inventory_request.id },
        { status: InventoryRequestStatus.APPROVED_BY_LOGIST },
      );

      await queryRunner.commitTransaction();
      return this.findOneById(inventory_request.id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }

  public async getInventoryRequests(
    pagination: FindPaginationDto,
  ): Promise<PaginatedInventoryRequests> {
    const [items, total] = await this.inventoryRequestRepository.findAndCount({
      order: { created_at: 'DESC' },
      ...pagination,
    });
    return { items, total };
  }
}
