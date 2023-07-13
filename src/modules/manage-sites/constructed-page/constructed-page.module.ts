import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructedPage } from './entity/constructed-page.entity';
import { ConstructedPageResolver } from './constructed-page.resolver';
import { ConstructedPageService } from './constructed-page.service';
import { ConstructedBlockModule } from './constructed-block/constructed-block.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConstructedPage]),
    ConstructedBlockModule,
  ],
  providers: [ConstructedPageResolver, ConstructedPageService],
})
export class ConstructedPageModule {}
