import {
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { ConstructedPageCompany } from '../entity/constructed-page-company.entity';

@InputType()
export class ConstructedPageCompanyInput extends OmitType(
  ConstructedPageCompany,
  ['constructed_pages'],
) {}

@InputType()
export class CreateConstructedPageCompanyDto extends OmitType(
  ConstructedPageCompanyInput,
  ['id'],
) {}

@InputType()
export class UpdateConstructedPageCompanyDto extends IntersectionType(
  PickType(ConstructedPageCompanyInput, ['id']),
  PartialType(OmitType(ConstructedPageCompanyInput, ['id'])),
) {}
