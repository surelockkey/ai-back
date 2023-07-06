import { Resolver } from '@nestjs/graphql';
import { InventoryRequestInvoiceService } from './inventory-request-invoice.service';
import { InventoryRequestInvoiceDto } from './dto/inventory-request-invoice.dto';
import { FileService } from 'src/modules/file/file.service';
import { QueryRunner } from 'typeorm';

@Resolver()
export class InventoryRequestInvoiceResolver {
  constructor(
    private readonly inventoryRequestInvoiceService: InventoryRequestInvoiceService,
    private readonly fileService: FileService,
  ) {}

  public async createManyInvoices(
    invoices: InventoryRequestInvoiceDto[],
    queryRunner: QueryRunner,
  ) {
    const files = await this.fileService.uploadManyPhotos(
      invoices.map((invoice) => invoice.file),
      queryRunner.manager,
      queryRunner,
    );

    // const all = await Promise.all(invoices.map((invoice) => {
    //     const { file } = invoice;
    //     await this.fileService.uploadManyPhotos()
    // }));
  }
}
