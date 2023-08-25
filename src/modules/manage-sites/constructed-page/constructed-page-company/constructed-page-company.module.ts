import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructedPageCompany } from './entity/constructed-page-company.entity';
import { ConstructedPageCompanyResolver } from './constructed-page-company.resolver';
import { ConstructedPageCompanyService } from './constructed-page-company.service';

@Module({
  imports: [TypeOrmModule.forFeature([ConstructedPageCompany])],
  providers: [ConstructedPageCompanyResolver, ConstructedPageCompanyService],
})
export class ConstructedPageCompanyModule {}
