import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructedPhoto } from './entity/constructed-photo.entity';
import { ConstructedPhotoResolver } from './constructed-photo.resolver';
import { ConstructedPhotoService } from './constructed-photo.service';

@Module({
  imports: [TypeOrmModule.forFeature([ConstructedPhoto])],
  providers: [ConstructedPhotoResolver, ConstructedPhotoService],
})
export class ConstructedPhotoModule {}
