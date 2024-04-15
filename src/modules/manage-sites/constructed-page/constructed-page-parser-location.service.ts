import { Injectable } from '@nestjs/common';
import { LocationGraphService } from '../location/location.service';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, QueryRunner } from 'typeorm';
import { GraphQLError } from 'graphql';
import { ConstructedPage } from './entity/constructed-page.entity';
import { ConstructedPageType } from './enum/constructed-page-type.enum';
import { ConstructedMetaInfo } from './constructed-meta-info/entity/constructed-meta-info.entity';
import { ConstructedPhoto } from './constructed-photo/entity/constructed-photo.entity';
import axios from 'axios';
import * as sharp from 'sharp';
import { FileService } from 'src/modules/file/file.service';
import { ConstructedPreview } from './constructed-preview/entity/constructed-preview.entity';
import { ConstructedBlock } from './constructed-block/entity/constructed-block.entity';

@Injectable()
export class ConstructedPageParserLocationService {
  constructor(
    private readonly locationService: LocationGraphService,
    private readonly fileService: FileService,
    @InjectDataSource() private readonly dataSource: DataSource,
  ) {}

  public async parseAllLocation() {
    const all_locations = await this.locationService.getAllLocation();

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    let i = 0;

    try {
      for (const location of all_locations) {
        const constructed_page = await queryRunner.manager.save(
          ConstructedPage,
          {
            type: ConstructedPageType.LOCATION,
            constructed_page_company_id: '359be4f8-ee18-415f-b295-b89781b14065',
          },
        );

        await queryRunner.manager.save(ConstructedMetaInfo, {
          constructed_page_id: constructed_page.id,
          meta_tag_description: location.Description,
          meta_tag_title: location.Title,
          url_for_blog: location.Url,
          name: location.Name,
          state: location.State,
          map_link: location.Map_link,
        });

        let photo_id;

        if (location.Photo.url) {
          const photo = await this.saveConstructedPhoto(
            location.Photo.url,
            queryRunner,
          );
          photo_id = photo.id;
        }

        await queryRunner.manager.save(ConstructedPreview, {
          constructed_page_id: constructed_page.id,
          constructed_photo_id: photo_id,
          headline: `Locksmith services in ${location.Name}, ${location.State}`,
          description: location.Our_services.Text_before,
          type_block: 'main_block',
        });

        await queryRunner.manager.save(ConstructedBlock, [
          {
            constructed_page_id: constructed_page.id,
            type_block: 'main_block',
            position_block: 1,
            headline: `Locksmith services in ${location.Name}, ${location.State}`,
            description: location.Our_services.Text_before,
            constructed_photo_id: photo_id,
          },
          {
            constructed_page_id: constructed_page.id,
            type_block: 'about_city',
            position_block: 2,
            headline: location.About_city.H2,
            description: location.About_city.Text,
          },
          {
            constructed_page_id: constructed_page.id,
            type_block: 'about_us',
            position_block: 3,
            headline: location.About_us.H2,
            description: location.About_us.Text,
          },
          {
            constructed_page_id: constructed_page.id,
            type_block: 'prices',
            position_block: 4,
            headline: location.Prices.H2,
            description: location.Prices.Text,
            text_right: location.Prices.description_right,
            list: location.Prices.list
              .map((item) => `${item.name} ##-## ${item.price}`)
              .join('\n'),
          },
          {
            constructed_page_id: constructed_page.id,
            type_block: 'our_services',
            position_block: 5,
            headline: location.Our_services.H2,
            description: location.Our_services.Text_before,
            list: location.Our_services.List,
            last_text: location.Our_services.Text_after,
          },
          {
            constructed_page_id: constructed_page.id,
            type_block: 'hour_24_services',
            position_block: 6,
            headline: location.Hour_24_services.H2,
            description: location.Hour_24_services.Text_before,
            list: location.Hour_24_services.List,
            last_text: location.Hour_24_services.Text_after,
          },
        ]);

        console.log('NOW IS ', i++);
      }

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }

  public async saveConstructedPhoto(
    link: string,
    queryRunner: QueryRunner,
  ): Promise<ConstructedPhoto> {
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
        file_id,
      });
    }
  }
}
