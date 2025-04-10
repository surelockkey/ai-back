import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Sitemap } from './entity/sitemap.entity';
import * as moment from 'moment';
import { SitemapInput } from './dto/sitemap.types';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedPageCompany } from '../constructed-page/constructed-page-company/entity/constructed-page-company.entity';

@Injectable()
export class SitemapService extends CrudService<Sitemap> {
  constructor(
    @InjectRepository(Sitemap)
    private readonly sitemapRepository: Repository<Sitemap>,
    private dataSource: DataSource,
  ) {
    super(sitemapRepository);
  }

  private async notifyWebhook(url: string, data: any): Promise<void> {
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(`Failed to notify webhook ${url}:`, error);
    }
  }

  private async notifyWebhooks(
    urls: string[],
    type: 'sitemap' | 'redirects',
  ): Promise<void> {
    if (!urls?.length) return;

    await Promise.all(urls.map((url) => this.notifyWebhook(url, { type })));
  }

  async getSitemapsByCompanyId(company_id: string): Promise<Sitemap[]> {
    return this.sitemapRepository.find({
      where: { company_id },
      relations: ['company'],
    });
  }

  async updateCompanySitemap(
    company_id: string,
    sitemaps: SitemapInput[],
  ): Promise<Sitemap[]> {
    const query_runner = this.dataSource.createQueryRunner();

    await query_runner.connect();
    await query_runner.startTransaction();

    try {
      await query_runner.manager
        .createQueryBuilder()
        .delete()
        .from(Sitemap)
        .where('company_id = :company_id', { company_id })
        .execute();

      const new_sitemaps: Sitemap[] = sitemaps.map((sitemap: SitemapInput) =>
        this.sitemapRepository.create({
          ...sitemap,
          company_id,
          last_mod: sitemap.last_mod || moment().unix(),
        }),
      );

      const saved_sitemaps = await query_runner.manager.save<Sitemap>(
        new_sitemaps,
      );

      await query_runner.commitTransaction();

      // Get company webhook URLs and notify after successful save
      const company = await this.dataSource
        .getRepository(ConstructedPageCompany)
        .findOne({ where: { id: company_id } });

      if (company?.webhook_urls?.length) {
        await Promise.all(
          company.webhook_urls.map((url) =>
            this.notifyWebhook(url, { type: 'sitemap' }),
          ),
        );
      }

      return saved_sitemaps;
    } catch (error) {
      await query_runner.rollbackTransaction();
      throw new Error('Failed to update company sitemap');
    } finally {
      await query_runner.release();
    }
  }

  private generateLoc(baseUrl: string, metaUrl: string): string {
    return `${baseUrl}${metaUrl || ''}`.replace(/\/+/g, '/');
  }

  // async handlePageSitemap(page: {
  //   type: string;
  //   is_posted: boolean;
  //   meta_info: { url: string; redirect_url?: string };
  //   constructed_page_company_id: string;
  // }): Promise<void> {
  //   const company = await this.dataSource
  //     .getRepository('constructed_page_company')
  //     .findOne({
  //       where: { id: page.constructed_page_company_id },
  //     });

  //   if (!company) return;

  //   const baseUrl =
  //     page.type === 'blog' ? company.blog_base_url : company.location_base_url;
  //   const loc = this.generateLoc(baseUrl, page.meta_info?.url);

  //   if (page.is_posted && !page.meta_info?.redirect_url) {
  //     const existingSitemap = await this.findOne({ where: { loc } });

  //     if (existingSitemap) {
  //       await this.update(
  //         { id: existingSitemap.id },
  //         { last_mod: moment().unix() },
  //       );
  //     } else {
  //       await this.create({
  //         loc,
  //         company_id: company.id,
  //         last_mod: moment().unix(),
  //         priority: 0.8,
  //         changefreq: 'daily',
  //       });
  //     }
  //   } else {
  //     await this.delete({ loc });
  //   }
  // }
}
