import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SitemapService } from './sitemap.service';
import { SitemapInput } from './dto/sitemap.types';
import { Sitemap } from './entity/sitemap.entity';
import { ConstructedPageType } from '../constructed-page/enum/constructed-page-type.enum';

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

  @Mutation(() => Boolean)
  updateAllSitemapLastmodByPageCriteria(
    @Args('company_id') company_id: string,
    @Args('type', { type: () => ConstructedPageType, nullable: true })
    type: ConstructedPageType,
    @Args('is_posted', { nullable: true }) is_posted?: boolean,
  ): Promise<boolean> {
    return this.sitemapService.updateSitemapLastmodByPageCriteria(
      company_id,
      type,
      is_posted,
    );
  }
}
