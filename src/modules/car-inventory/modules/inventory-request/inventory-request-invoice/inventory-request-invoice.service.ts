import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { InventoryRequestInvoice } from './entity/inventory-request-invoice.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { FileService } from 'src/modules/file/file.service';
import { InventoryRequestInvoiceDto } from './dto/inventory-request-invoice.dto';
import { TechInventoryItemService } from '../tech-inventory-item/tech-inventory-item.service';

@Injectable()
export class InventoryRequestInvoiceService extends CrudService<InventoryRequestInvoice> {
  constructor(
    @InjectRepository(InventoryRequestInvoice)
    private readonly inventoryRequestInvoiceRepository: Repository<InventoryRequestInvoice>,
    private readonly fileService: FileService,
    private readonly techInventoryItemService: TechInventoryItemService,
  ) {
    super(inventoryRequestInvoiceRepository);
  }

  public async createManyInvoices(
    invoices: InventoryRequestInvoiceDto[],
    inventory_request_id: string,
    queryRunner: QueryRunner,
  ) {
    const files = await this.fileService.uploadManyPhotos(
      invoices.map((invoice) => invoice.file),
      queryRunner.manager,
      queryRunner,
    );

    const created_invoices = await queryRunner.manager.save(
      InventoryRequestInvoice,
      invoices.map((invoice, i) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { tech_items: _, file: __, ...invoice_dto } = invoice;
        return {
          file_id: files[i].id,
          inventory_request_id,
          ...invoice_dto,
        };
      }),
    );

    const tech_items_to_save = [];
    created_invoices.forEach((inv, i) => {
      tech_items_to_save.push(
        ...invoices[i].tech_items.map((tech_item) => ({
          ...tech_item,
          request_invoice_id: inv.id,
          inventory_request_id,
        })),
      );
    });

    await this.techInventoryItemService.saveManyTechItemsTransactional(
      tech_items_to_save,
      queryRunner,
    );
  }
}
