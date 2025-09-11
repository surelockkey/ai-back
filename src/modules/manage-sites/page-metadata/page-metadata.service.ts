import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '@tech-slk/nest-crud';
import { Repository, In } from 'typeorm';
import { GraphQLError } from 'graphql';
import { PageMetadata } from './entity/page-metadata.entity';
import {
  CreatePageMetadataDto,
  UpdatePageMetadataDto,
} from './dto/page-metadata.dto';

@Injectable()
export class PageMetadataService extends CrudService<PageMetadata> {
  constructor(
    @InjectRepository(PageMetadata)
    private readonly pageMetadataRepository: Repository<PageMetadata>,
  ) {
    super(pageMetadataRepository);
  }

  public async getAllByCompanyId(
    constructed_page_company_id: string,
  ): Promise<PageMetadata[]> {
    return await this.pageMetadataRepository.find({
      where: { constructed_page_company_id },
    });
  }

  public async getOneById(id: string): Promise<PageMetadata> {
    const metadata = await this.pageMetadataRepository.findOne({
      where: { id },
    });

    if (!metadata) {
      throw new GraphQLError(`Page metadata with id ${id} not found`);
    }

    return metadata;
  }

  public async createOne(
    createPageMetadataDto: CreatePageMetadataDto,
  ): Promise<PageMetadata> {
    // Check if key already exists for this company
    const existingMetadata = await this.pageMetadataRepository.findOne({
      where: {
        key: createPageMetadataDto.key,
        constructed_page_company_id:
          createPageMetadataDto.constructed_page_company_id,
      },
    });

    if (existingMetadata) {
      throw new GraphQLError(
        `Page metadata with key "${createPageMetadataDto.key}" already exists for this company`,
      );
    }

    const created = this.pageMetadataRepository.create(createPageMetadataDto);
    return await this.pageMetadataRepository.save(created);
  }

  public async createMany(
    metadataList: CreatePageMetadataDto[],
  ): Promise<PageMetadata[]> {
    // Check for duplicate keys within the input
    const keys = metadataList.map((item) => item.key);
    const uniqueKeys = new Set(keys);
    if (keys.length !== uniqueKeys.size) {
      throw new GraphQLError('Duplicate keys found in input');
    }

    // Check for existing keys in database
    if (metadataList.length > 0) {
      const companyId = metadataList[0].constructed_page_company_id;
      const existingMetadata = await this.pageMetadataRepository.find({
        where: {
          key: In(keys),
          constructed_page_company_id: companyId,
        },
      });

      if (existingMetadata.length > 0) {
        const existingKeys = existingMetadata.map((item) => item.key);
        throw new GraphQLError(
          `The following keys already exist: ${existingKeys.join(', ')}`,
        );
      }
    }

    const created = this.pageMetadataRepository.create(metadataList);
    return await this.pageMetadataRepository.save(created);
  }

  public async updateOne(
    updatePageMetadataDto: UpdatePageMetadataDto,
  ): Promise<PageMetadata> {
    const existingMetadata = await this.getOneById(updatePageMetadataDto.id);

    // If key is being updated, check for conflicts
    if (
      updatePageMetadataDto.key &&
      updatePageMetadataDto.key !== existingMetadata.key
    ) {
      const conflictingMetadata = await this.pageMetadataRepository.findOne({
        where: {
          key: updatePageMetadataDto.key,
          constructed_page_company_id:
            existingMetadata.constructed_page_company_id,
        },
      });

      if (conflictingMetadata) {
        throw new GraphQLError(
          `Page metadata with key "${updatePageMetadataDto.key}" already exists for this company`,
        );
      }
    }

    await this.pageMetadataRepository.update(
      { id: updatePageMetadataDto.id },
      updatePageMetadataDto,
    );

    return await this.getOneById(updatePageMetadataDto.id);
  }

  public async deleteOne(id: string): Promise<PageMetadata> {
    const metadata = await this.getOneById(id);
    await this.pageMetadataRepository.delete({ id });
    return metadata;
  }
}
