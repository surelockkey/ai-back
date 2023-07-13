import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructedMetaInfo } from './entity/constructed-meta-info.entity';
import { ConstructedMetaInfoResolver } from './constructed-meta-info.resolver';
import { ConstructedMetaInfoService } from './constructed-meta-info.service';

@Module({
  imports: [TypeOrmModule.forFeature([ConstructedMetaInfo])],
  providers: [ConstructedMetaInfoResolver, ConstructedMetaInfoService],
  exports: [ConstructedMetaInfoService],
})
export class ConstructedMetaInfoModule {}
