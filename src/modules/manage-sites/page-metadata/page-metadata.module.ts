import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageMetadata } from './entity/page-metadata.entity';
import { PageMetadataService } from './page-metadata.service';
import { PageMetadataResolver } from './page-metadata.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([PageMetadata])],
  providers: [PageMetadataService, PageMetadataResolver],
  exports: [PageMetadataService],
})
export class PageMetadataModule {}
