import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructedPageCompany } from './entity/constructed-page-company.entity';
import { ConstructedPageCompanyResolver } from './constructed-page-company.resolver';
import { ConstructedPageCompanyService } from './constructed-page-company.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([ConstructedPageCompany]), HttpModule],
  providers: [ConstructedPageCompanyResolver, ConstructedPageCompanyService],
})
export class ConstructedPageCompanyModule {}
