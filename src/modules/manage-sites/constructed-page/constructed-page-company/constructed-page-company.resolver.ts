import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ConstructedPageCompanyService } from './constructed-page-company.service';
import { ConstructedPageCompany } from './entity/constructed-page-company.entity';
import {
  CreateConstructedPageCompanyDto,
  UpdateConstructedPageCompanyDto,
} from './dto/constructed-page-company.dto';

@Resolver()
export class ConstructedPageCompanyResolver {
  constructor(
    private readonly constructedPageCompanyService: ConstructedPageCompanyService,
  ) {}

  @Query(() => [ConstructedPageCompany])
  getConstructedPageCompanies() {
    return this.constructedPageCompanyService.findAll();
  }

  @Mutation(() => ConstructedPageCompany)
  createConstructedPageCompany(
    @Args('company_dto', { type: () => CreateConstructedPageCompanyDto })
    company_dto: CreateConstructedPageCompanyDto,
  ) {
    return this.constructedPageCompanyService.create(company_dto);
  }

  @Mutation(() => ID)
  deleteConstructedPageCompany(@Args('id', { type: () => ID }) id: string) {
    return this.constructedPageCompanyService.deleteByIdReturnId(id);
  }

  @Mutation(() => ConstructedPageCompany)
  updateConstructedPageCompany(
    @Args('company_dto', { type: () => UpdateConstructedPageCompanyDto })
    company_dto: UpdateConstructedPageCompanyDto,
  ) {
    return this.constructedPageCompanyService.updateAndReturn(
      company_dto.id,
      company_dto,
    );
  }
}
