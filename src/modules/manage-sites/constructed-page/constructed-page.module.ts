import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructedPage } from './entity/constructed-page.entity';
import { ConstructedPageResolver } from './constructed-page.resolver';
import { ConstructedPageService } from './constructed-page.service';
import { ConstructedBlockModule } from './constructed-block/constructed-block.module';
import { ConstructedMetaInfoModule } from './constructed-meta-info/constructed-meta-info.module';
import { ConstructedPhotoModule } from './constructed-photo/constructed-photo.module';
import { ConstructedPreviewModule } from './constructed-preview/constructed-preview.module';
import { ConstructedPageCompanyModule } from './constructed-page-company/constructed-page-company.module';
import { ConstructedPageParserService } from './constructed-page-parser.service';
import { ConstructorBlogModule } from '../blog/constructor-blog/constructor-blog.module';
import { ConstructedPageParserLocationService } from './constructed-page-parser-location.service';
import { LocationModule } from '../location/location.module';
import { SitemapModule } from '../sitemap/sitemap.module';
import { ConstructedPageRestController } from './constructed-page.controller';
import { ConstructedPagePublisherCron } from './cron/constructed-page-publisher.cron';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConstructedPage]),
    ConstructedBlockModule,
    ConstructedMetaInfoModule,
    ConstructedPhotoModule,
    ConstructedPreviewModule,
    ConstructedPageCompanyModule,
    ConstructorBlogModule,
    LocationModule,
    SitemapModule,
  ],
  providers: [
    ConstructedPageResolver,
    ConstructedPageService,
    ConstructedPageParserService,
    ConstructedPageParserLocationService,
    ConstructedPagePublisherCron,
  ],
  controllers: [ConstructedPageRestController],
})
export class ConstructedPageModule { }
