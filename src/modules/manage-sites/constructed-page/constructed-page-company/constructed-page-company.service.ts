import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedPageCompany } from './entity/constructed-page-company.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConstructedPageCompanyService extends CrudService<ConstructedPageCompany> {
  constructor(
    @InjectRepository(ConstructedPageCompany)
    private readonly constructedPageCompanyRepository: Repository<ConstructedPageCompany>,
  ) {
    super(constructedPageCompanyRepository);
  }
}
