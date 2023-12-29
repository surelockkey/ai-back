import { Injectable } from '@nestjs/common';
import { ConstructorBlogService } from '../blog/constructor-blog/constructor-blog.service';
import { CreateConstructedPageDto } from './dto/constructed-page.dto';
import { ConstructedPageType } from './enum/constructed-page-type.enum';
import { PhotoForBlock } from '../blog/constructor-blog/entity/blog-photo.entity';
import { ConstructedPhotoDto } from './constructed-photo/dto/constructed-photo.dto';
import * as sharp from 'sharp';
import { FileUpload } from 'graphql-upload';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, QueryRunner } from 'typeorm';
import { GraphQLError } from 'graphql';
import { ConstructedPage } from './entity/constructed-page.entity';
import { ConstructedMetaInfo } from './constructed-meta-info/entity/constructed-meta-info.entity';
import { FileService } from 'src/modules/file/file.service';
import { ConstructedPhoto } from './constructed-photo/entity/constructed-photo.entity';
import { ConstructedPreview } from './constructed-preview/entity/constructed-preview.entity';
import { BlogPreview } from '../blog/constructor-blog/entity/blog-preview.entity';
import { BlogBlock } from '../blog/constructor-blog/entity/blog-block.entity';
import { ConstructedBlock } from './constructed-block/entity/constructed-block.entity';
import axios from 'axios';

@Injectable()
export class ConstructedPageParserService {
  constructor(
    public readonly constructorBlogService: ConstructorBlogService,
    @InjectDataSource() private readonly dataSource: DataSource,
    private readonly fileService: FileService,
  ) {}

  public async parseBlogs() {
    const old_blogs = await this.constructorBlogService.getAllBlogs();

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();

    try {
      let i = 1;
      for (const blog of old_blogs) {
        const {
          id,
          metaInfo,
          preview_info,
          blocks,
          post_date_future,
          ...other_blog
        } = blog;

        const new_blog = await queryRunner.manager.save(ConstructedPage, {
          ...other_blog,
          type: ConstructedPageType.BLOG,
        });

        const {
          id: _meta_info_id,
          constructor_blog_id,
          url_for_blog,
          constructor_blog,
          ...other_meta_info
        } = metaInfo;

        await queryRunner.manager.save(ConstructedMetaInfo, {
          ...other_meta_info,
          url: url_for_blog,
          constructed_page_id: new_blog.id,
        });

        await this.savePreviewInfo(preview_info, new_blog.id, queryRunner);

        await this.saveBlocks(blocks, new_blog.id, queryRunner);

        console.log(i);
        i++;
      }
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }

  public async savePreviewInfo(
    preview_info: BlogPreview,
    constructed_page_id: string,
    queryRunner: QueryRunner,
  ): Promise<ConstructedPreview> {
    let photo_id;
    if (preview_info.photo) {
      const saved_photo = await this.saveConstructedPhoto(
        preview_info.photo,
        queryRunner,
      );

      photo_id = saved_photo.id;
    }
    const {
      title,
      photo,
      constructor_blog_id,
      constructor_blog,
      id,
      ...other_preview_info
    } = preview_info;

    return queryRunner.manager.save(ConstructedPreview, {
      ...other_preview_info,
      headline: title,
      constructed_photo_id: photo_id,
      constructed_page_id,
    });
  }

  public async saveBlocks(
    blocks: BlogBlock[],
    constructed_page_id: string,
    queryRunner: QueryRunner,
  ) {
    for (const block of blocks) {
      let photo_id;
      if (block.photo) {
        const saved_photo = await this.saveConstructedPhoto(
          block.photo,
          queryRunner,
        );

        photo_id = saved_photo?.id;
      }
      const { id, constructor_blog, photo, ...block_info } = block;
      await queryRunner.manager.save(ConstructedBlock, {
        ...block_info,
        constructed_page_id,
        constructed_photo_id: photo_id,
      });
    }
  }

  public async saveConstructedPhoto(
    photo: PhotoForBlock,
    queryRunner: QueryRunner,
  ): Promise<ConstructedPhoto> {
    const { alt, title, link } = photo;

    if (link) {
      const imageResponse = await axios({
        url: link,
        responseType: 'arraybuffer',
      });

      const buffer_old = Buffer.from(imageResponse.data, 'binary');

      const buffer = await sharp(buffer_old).toBuffer();

      const { id: file_id } = await this.fileService.uploadOnePhotoFromBuffer(
        buffer,
      );

      return await queryRunner.manager.save(ConstructedPhoto, {
        alt,
        title,
        file_id,
      });
    }
  }
}
