import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Sitemap } from './entity/sitemap.entity';
import * as moment from 'moment';
import { SitemapInput } from './dto/sitemap.types';
import { CrudService } from '@tech-slk/nest-crud';

@Injectable()
export class SitemapService extends CrudService<Sitemap> {
  constructor(
    @InjectRepository(Sitemap)
    private readonly sitemapRepository: Repository<Sitemap>,
    private dataSource: DataSource,
  ) {
    super(sitemapRepository);
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
      return saved_sitemaps;
    } catch (error) {
      await query_runner.rollbackTransaction();
      throw new Error('Failed to update company sitemap');
    } finally {
      await query_runner.release();
    }
  }
}
