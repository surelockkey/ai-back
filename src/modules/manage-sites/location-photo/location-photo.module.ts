import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationPhoto } from './entity/location-photo.entity';
import { LocationPhotoResolver } from './location-photo.resolver';
import { LocationPhotoService } from './location-photo.service';
import { UploadModule } from 'src/modules/upload/upload.module';

@Module({
  imports: [UploadModule, TypeOrmModule.forFeature([LocationPhoto])],
  providers: [LocationPhotoResolver, LocationPhotoService],
})
export class LocationPhotoModule {}
