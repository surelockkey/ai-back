import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository, LessThanOrEqual, DataSource } from 'typeorm';
import * as moment from 'moment';
import { ConstructedPage } from '../entity/constructed-page.entity';
import { SitemapService } from '../../sitemap/sitemap.service';

@Injectable()
export class ConstructedPagePublisherCron {
  private readonly logger = new Logger(ConstructedPagePublisherCron.name);

  constructor(
    @InjectRepository(ConstructedPage)
    private readonly constructedPageRepository: Repository<ConstructedPage>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
    private readonly sitemapService: SitemapService,
  ) { }

  /**
   * Run every minute to check for pages that should be published
   */
  @Cron(CronExpression.EVERY_MINUTE)
  async publishScheduledPages(): Promise<void> {
    const now = moment().unix();

    // Find pages that should be published based on schedule_date
    const pagesToPublish = await this.constructedPageRepository.find({
      where: {
        is_posted: false,
        schedule_date: LessThanOrEqual(now), // Changed from post_date
      },
      relations: ['meta_info', 'constructed_page_company'],
    });

    if (pagesToPublish.length === 0) {
      return;
    }

    this.logger.log(`Found ${pagesToPublish.length} pages to publish`);

    // Publish each page
    for (const page of pagesToPublish) {
      const queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();

      try {
        // Update page to published and set actual post_date
        await queryRunner.manager.update(
          ConstructedPage,
          { id: page.id },
          {
            is_posted: true,
            post_date: now, // Set when actually published
          }
        );

        // Handle sitemap update
        await this.sitemapService.handlePageSitemap(
          {
            type: page.type,
            is_posted: true,
            meta_info: {
              url: page.meta_info?.url,
              redirect_url: page.meta_info?.redirect_url,
              state: page.meta_info?.state,
              name: page.meta_info?.name,
            },
            constructed_page_company_id: page.constructed_page_company_id,
          },
          queryRunner,
        );

        await queryRunner.commitTransaction();

        this.logger.log(
          `Successfully published page ${page.id} (${page.meta_info?.url}) - scheduled: ${moment.unix(page.schedule_date).format()}, published: ${moment.unix(now).format()}`
        );
      } catch (error) {
        await queryRunner.rollbackTransaction();
        this.logger.error(
          `Failed to publish page ${page.id}: ${error.message}`,
          error.stack
        );
      } finally {
        await queryRunner.release();
      }
    }
  }
}
