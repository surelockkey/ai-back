import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructedPreview } from './entity/constructed-preview.entity';
import { ConstructedPreviewResolver } from './constructed-preview.resolver';
import { ConstructedPreviewService } from './constructed-preview.service';

@Module({
  imports: [TypeOrmModule.forFeature([ConstructedPreview])],
  providers: [ConstructedPreviewResolver, ConstructedPreviewService],
  exports: [ConstructedPreviewService],
})
export class ConstructedPreviewModule {}
