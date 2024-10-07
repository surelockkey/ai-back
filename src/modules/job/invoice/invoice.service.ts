import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkizInvoice } from './entity/invoice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(WorkizInvoice)
    private readonly workizInvoiceRepository: Repository<WorkizInvoice>,
  ) {}
}
