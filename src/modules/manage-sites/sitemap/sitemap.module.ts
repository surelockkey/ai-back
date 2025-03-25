import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SitemapService } from './sitemap.service';
import { SitemapResolver } from './sitemap.resolver';
import { Sitemap } from './entity/sitemap.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sitemap])],
  providers: [SitemapService, SitemapResolver],
  exports: [SitemapService],
})
export class SitemapModule {}
