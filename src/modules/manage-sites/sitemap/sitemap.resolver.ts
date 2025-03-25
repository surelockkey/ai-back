import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SitemapService } from './sitemap.service';
import { SitemapInput } from './dto/sitemap.types';
import { Sitemap } from './entity/sitemap.entity';

@Resolver()
export class SitemapResolver {
  constructor(private readonly sitemapService: SitemapService) {}

  @Query(() => [Sitemap])
  async sitemapsByCompanyId(
    @Args('company_id') company_id: string,
  ): Promise<Sitemap[]> {
    return this.sitemapService.getSitemapsByCompanyId(company_id);
  }

  @Mutation(() => [Sitemap])
  async updateCompanySitemap(
    @Args('company_id') company_id: string,
    @Args({ name: 'sitemaps', type: () => [SitemapInput] })
    sitemaps: SitemapInput[],
  ): Promise<Sitemap[]> {
    return this.sitemapService.updateCompanySitemap(company_id, sitemaps);
  }
}
