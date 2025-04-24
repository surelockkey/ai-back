import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, DeepPartial } from 'typeorm';
import { ConstructedPageCompany } from './entity/constructed-page-company.entity';
import { CrudService } from '@tech-slk/nest-crud';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ConstructedPageCompanyService extends CrudService<ConstructedPageCompany> {
  constructor(
    @InjectRepository(ConstructedPageCompany)
    private readonly constructedPageCompanyRepository: Repository<ConstructedPageCompany>,
    private dataSource: DataSource,
    private readonly httpService: HttpService,
  ) {
    super(constructedPageCompanyRepository);
  }

  public async notifyWebhook(
    url: string,
    type: 'sitemap' | 'redirects',
  ): Promise<void> {
    try {
      const webhookUrl = new URL(url);
      webhookUrl.search +=
        (webhookUrl.search ? '&' : '?') + encodeURIComponent(type);

      const config: AxiosRequestConfig = {
        method: 'GET',
        maxRedirects: 5,
      };

      try {
        const response = await lastValueFrom(
          this.httpService.get(webhookUrl.toString(), config),
        );
        console.log(response.data);
      } catch (error) {
        console.error('Webhook error:', error.message);
      }
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

  async updateCompany(
    id: string,
    data: DeepPartial<ConstructedPageCompany>,
  ): Promise<ConstructedPageCompany> {
    const updatedCompany = await this.updateAndReturn(id, data);

    if (data.redirects !== undefined && updatedCompany?.webhook_urls?.length) {
      await this.notifyWebhooks(updatedCompany.webhook_urls, 'redirects');
    }

    return updatedCompany;
  }
}
