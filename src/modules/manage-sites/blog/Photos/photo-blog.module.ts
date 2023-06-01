import { Module } from '@nestjs/common';
import { PhotoBlogResolver } from './photo-blog.resolver';
import { PhotoBlogService } from './photo-blog.service';
import { PhotoBlog } from './Entity/photo-blog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModule } from 'src/modules/upload/upload.module';

@Module({
  imports: [UploadModule, TypeOrmModule.forFeature([PhotoBlog])],
  providers: [PhotoBlogResolver, PhotoBlogService],
})
export class PhotoBlogModule {}
