import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SitemapService } from './sitemap.service';
import { SitemapResolver } from './sitemap.resolver';
import { Sitemap } from './entity/sitemap.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([Sitemap]), HttpModule],
  providers: [SitemapService, SitemapResolver],
  exports: [SitemapService],
})
export class SitemapModule {}
