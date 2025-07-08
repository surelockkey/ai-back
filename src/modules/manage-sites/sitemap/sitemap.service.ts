import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, QueryRunner } from 'typeorm';
import { Sitemap } from './entity/sitemap.entity';
import * as moment from 'moment';
import { SitemapInput } from './dto/sitemap.types';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedPageCompany } from '../constructed-page/constructed-page-company/entity/constructed-page-company.entity';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';
import { lastValueFrom } from 'rxjs';
import { ConstructedPageType } from '../constructed-page/enum/constructed-page-type.enum';

@Injectable()
export class SitemapService extends CrudService<Sitemap> {
  constructor(
    @InjectRepository(Sitemap)
    private readonly sitemapRepository: Repository<Sitemap>,
    private dataSource: DataSource,
    private readonly httpService: HttpService,
  ) {
    super(sitemapRepository);
  }

  private async fetchWebhook(url: string) {
    try {
      const config: AxiosRequestConfig = {
        method: 'GET',
        maxRedirects: 5,
      };

      const res = await lastValueFrom(this.httpService.get(url, config));

      console.log(res);
    } catch (error) {
      console.error('Webhook error:', error.message);
    }
  }

  private async notifyWebhook(
    url: string,
    type: 'sitemap' | 'redirects',
  ): Promise<void> {
    try {
      const webhookUrl = new URL(url);
      webhookUrl.search +=
        (webhookUrl.search ? '&' : '?') + encodeURIComponent(type);

      this.fetchWebhook(webhookUrl.toString());
    } catch (error) {
      console.error(`Failed to notify webhook ${url}:`, error);
    }
  }

  private async notifyWebhooks(
    urls: string[],
    type: 'sitemap' | 'redirects',
  ): Promise<void> {
    if (!urls?.length) return;

    await Promise.all(urls.map((url) => this.notifyWebhook(url, type)));
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
          // lastmod: sitemap.lastmod || moment().unix(), // Removed this by Roman 7.7.2025
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
        await this.notifyWebhooks(company.webhook_urls, 'sitemap');
      }

      return saved_sitemaps;
    } catch (error) {
      await query_runner.rollbackTransaction();
      throw new Error('Failed to update company sitemap');
    } finally {
      await query_runner.release();
    }
  }

  private generateLoc(
    baseUrl: string,
    state: string,
    name: string,
    url: string,
  ): string {
    return `${baseUrl
      .replace(`{state}`, state)
      .replace(`{name}`, name)
      .replace(`{url}`, url)
      .toLowerCase()}`;
  }

  async handlePageSitemap(
    page: {
      type: string;
      is_posted: boolean;
      meta_info: {
        url: string;
        redirect_url?: string;
        state?: string;
        name?: string;
      };
      constructed_page_company_id: string;
    },
    queryRunner?: QueryRunner,
  ): Promise<void> {
    const isExternalTransaction = !!queryRunner;
    const localQueryRunner = queryRunner || this.dataSource.createQueryRunner();

    if (!isExternalTransaction) {
      await localQueryRunner.connect();
      await localQueryRunner.startTransaction();
    }

    try {
      const manager = localQueryRunner.manager;

      const company = await manager
        .getRepository('constructed_page_company')
        .findOne({
          where: { id: page.constructed_page_company_id },
        });

      if (!company) return;

      const baseUrl =
        page.type === ConstructedPageType.BLOG
          ? company.blog_base_url
          : company.location_base_url;

      const loc = this.generateLoc(
        baseUrl,
        page.meta_info?.state,
        page.meta_info?.name,
        page.meta_info?.url,
      );

      let sitemapChanged = false;

      if (page.is_posted && !page.meta_info?.redirect_url) {
        const existingSitemap = await manager
          .getRepository(Sitemap)
          .findOne({ where: { loc } });

        if (existingSitemap) {
          await manager.update(
            Sitemap,
            { id: existingSitemap.id },
            { lastmod: moment().unix() },
          );
        } else {
          await manager.save(Sitemap, {
            loc,
            company_id: company.id,
            lastmod: moment().unix(),
          });
        }
        sitemapChanged = true;
      } else {
        const existingSitemap = await manager
          .getRepository(Sitemap)
          .findOne({ where: { loc } });
        if (existingSitemap) {
          await manager.delete(Sitemap, { loc });
          sitemapChanged = true;
        }
      }

      if (!isExternalTransaction) {
        await localQueryRunner.commitTransaction();
      }

      // Notify webhooks if sitemap was changed (regardless of transaction type)
      if (sitemapChanged && company.webhook_urls?.length) {
        await this.notifyWebhooks(company.webhook_urls, 'sitemap');
      }
    } catch (error) {
      if (!isExternalTransaction) {
        await localQueryRunner.rollbackTransaction();
      }
      throw error;
    } finally {
      if (!isExternalTransaction) {
        await localQueryRunner.release();
      }
    }
  }
}
