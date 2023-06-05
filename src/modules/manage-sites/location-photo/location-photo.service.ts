import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GraphQLError } from 'graphql';
import { Repository } from 'typeorm';
import { LocationPhoto } from './entity/location-photo.entity';
import { UploadService } from 'src/modules/upload/upload.service';
import { IFileUpload } from 'src/modules/upload/type/i-file-upload';
import { UploadFileResult } from 'src/modules/upload/type/upload-result';
import { SendDto } from '@tech-slk/nest-crud';

@Injectable()
export class LocationPhotoService {
  constructor(
    private readonly uploadService: UploadService,
    @InjectRepository(LocationPhoto)
    private locationPhotoRepository: Repository<LocationPhoto>,
  ) {}

  public async getAllLocationPhoto(): Promise<LocationPhoto[]> {
    return await this.locationPhotoRepository.find({
      order: { _insertion_order: 'DESC' },
    });
  }

  public async createPhotoLocation(file: IFileUpload): Promise<LocationPhoto> {
    const awsObject: UploadFileResult = await this.uploadService.uploadFile(
      file,
    );
    const photo = this.locationPhotoRepository.create({
      awsKey: awsObject.Key,
      awsUrl: awsObject.Url,
    });
    return await this.locationPhotoRepository.save(photo);
  }

  public async deletePhotoLocationById(id: string): Promise<LocationPhoto> {
    const photo = await this.locationPhotoRepository.findOneBy({ id });
    if (!photo) {
      throw new GraphQLError('Photo not found.');
    }
    await this.uploadService.deleteFile(photo.awsKey);
    await this.locationPhotoRepository.delete(id);
    return photo;
  }

  public async deleteManyPhoto(keys: string[]): Promise<SendDto> {
    await this.uploadService.deleteManyFiles(keys);
    return { status: 200, message: 'Success' };
  }
}
