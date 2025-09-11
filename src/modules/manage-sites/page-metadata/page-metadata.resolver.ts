import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import {
  CreatePageMetadataDto,
  CreateManyPageMetadataDto,
  UpdatePageMetadataDto,
} from './dto/page-metadata.dto';
import { PageMetadata } from './entity/page-metadata.entity';
import { PageMetadataService } from './page-metadata.service';

@Resolver(() => PageMetadata)
export class PageMetadataResolver {
  constructor(private readonly pageMetadataService: PageMetadataService) {}

  @Query(() => [PageMetadata])
  async getAllPageMetadata(
    @Args('constructed_page_company_id', { type: () => ID })
    constructed_page_company_id: string,
  ): Promise<PageMetadata[]> {
    return this.pageMetadataService.getAllByCompanyId(
      constructed_page_company_id,
    );
  }

  @Query(() => PageMetadata)
  async getPageMetadataById(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<PageMetadata> {
    return this.pageMetadataService.getOneById(id);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO, UserRole.MARKETING)
  @Mutation(() => PageMetadata)
  async createPageMetadata(
    @Args('pageMetadata', { type: () => CreatePageMetadataDto })
    pageMetadata: CreatePageMetadataDto,
  ): Promise<PageMetadata> {
    return this.pageMetadataService.createOne(pageMetadata);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO, UserRole.MARKETING)
  @Mutation(() => [PageMetadata])
  async createManyPageMetadata(
    @Args('input', { type: () => CreateManyPageMetadataDto })
    input: CreateManyPageMetadataDto,
  ): Promise<PageMetadata[]> {
    return this.pageMetadataService.createMany(input.metadata);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO, UserRole.MARKETING)
  @Mutation(() => PageMetadata)
  async updatePageMetadata(
    @Args('pageMetadata', { type: () => UpdatePageMetadataDto })
    pageMetadata: UpdatePageMetadataDto,
  ): Promise<PageMetadata> {
    return this.pageMetadataService.updateOne(pageMetadata);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO, UserRole.MARKETING)
  @Mutation(() => PageMetadata)
  async deletePageMetadata(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<PageMetadata> {
    return this.pageMetadataService.deleteOne(id);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO, UserRole.MARKETING)
  @Mutation(() => [ID])
  async deleteManyPageMetadata(
    @Args('ids', { type: () => [ID] })
    ids: string[],
  ): Promise<string[]> {
    await this.pageMetadataService.deleteManyByIds(ids);
    return ids;
  }
}
