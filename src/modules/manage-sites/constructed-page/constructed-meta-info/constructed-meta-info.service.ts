import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '@tech-slk/nest-crud';
import { ConstructedMetaInfo } from './entity/constructed-meta-info.entity';
import { QueryRunner, Repository } from 'typeorm';
import {
  ConstructedMetaInfoDto,
  UpdateConstructedMetaInfoDto,
} from './dto/constructed-meta-info.dto';

@Injectable()
export class ConstructedMetaInfoService extends CrudService<ConstructedMetaInfo> {
  constructor(
    @InjectRepository(ConstructedMetaInfo)
    private readonly constructedMetaInfoRepository: Repository<ConstructedMetaInfo>,
  ) {
    super(constructedMetaInfoRepository);
  }

  public async createConstructedMetaInfoTransactional(
    meta_info: ConstructedMetaInfoDto,
    constructed_page_id: string,
    queryRunner: QueryRunner,
  ) {
    return await queryRunner.manager.save(ConstructedMetaInfo, {
      ...meta_info,
      constructed_page_id,
    });
  }

  public async updateConstructedMetaInfoTransactional(
    update_constructed_meta_info_dto: UpdateConstructedMetaInfoDto,
    constructed_page_id: string,
    queryRunner: QueryRunner,
  ) {
    return await queryRunner.manager.update(
      ConstructedMetaInfo,
      { constructed_page_id },
      update_constructed_meta_info_dto,
    );
  }
}
