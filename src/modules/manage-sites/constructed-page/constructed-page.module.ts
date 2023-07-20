import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructedPage } from './entity/constructed-page.entity';
import { ConstructedPageResolver } from './constructed-page.resolver';
import { ConstructedPageService } from './constructed-page.service';
import { ConstructedBlockModule } from './constructed-block/constructed-block.module';
import { ConstructedMetaInfoModule } from './constructed-meta-info/constructed-meta-info.module';
import { ConstructedPhotoModule } from './constructed-photo/constructed-photo.module';
import { ConstructedPreviewModule } from './constructed-preview/constructed-preview.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConstructedPage]),
    ConstructedBlockModule,
    ConstructedMetaInfoModule,
    ConstructedPhotoModule,
    ConstructedPreviewModule,
  ],
  providers: [ConstructedPageResolver, ConstructedPageService],
})
export class ConstructedPageModule {}
