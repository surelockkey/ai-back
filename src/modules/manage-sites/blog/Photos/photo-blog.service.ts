import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GraphQLError } from 'graphql';
import { Repository } from 'typeorm';
import { PhotoBlog } from './Entity/photo-blog.entity';
import { IFileUpload } from 'src/modules/upload/type/i-file-upload';
import { UploadFileResult } from 'src/modules/upload/type/upload-result';
import { UploadService } from 'src/modules/upload/upload.service';

@Injectable()
export class PhotoBlogService {
  constructor(
    private readonly uploadService: UploadService,
    @InjectRepository(PhotoBlog)
    private photoBlogRepository: Repository<PhotoBlog>,
  ) {}

  public async getAllPhotoBlog(): Promise<PhotoBlog[]> {
    return await this.photoBlogRepository.find({
      order: { _insertion_order: 'DESC' },
    });
  }

  //todo find out in which moment field blogsLink must be set?
  public async createPhotoBlog(file: IFileUpload): Promise<PhotoBlog> {
    const awsObject: UploadFileResult = await this.uploadService.uploadFile(
      file,
    );

    const photo_blog = this.photoBlogRepository.create({
      awsKey: awsObject.Key,
      awsUrl: awsObject.Url,
    });
    return await this.photoBlogRepository.save(photo_blog);
  }

  async deletePhotoBlogById(id: string): Promise<PhotoBlog> {
    const photo = await this.photoBlogRepository.findOneBy({ id });
    if (!photo) {
      throw new GraphQLError('Photo not found.');
    }
    await this.uploadService.deleteFile(photo.awsKey);
    await this.photoBlogRepository.delete(id);
    return photo;
  }
}
