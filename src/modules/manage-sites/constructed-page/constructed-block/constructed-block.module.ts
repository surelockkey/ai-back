import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructedBlock } from './entity/constructed-block.entity';
import { ConstructedBlockResolver } from './constructed-block.resolver';
import { ConstructedBlockService } from './constructed-block.service';
import { ConstructedPhotoModule } from '../constructed-photo/constructed-photo.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConstructedBlock]),
    ConstructedPhotoModule,
  ],
  providers: [ConstructedBlockResolver, ConstructedBlockService],
  exports: [ConstructedBlockService],
})
export class ConstructedBlockModule {}
