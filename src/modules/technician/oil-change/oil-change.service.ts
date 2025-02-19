import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { OilChange } from './entity/oil-change.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateOilChange, UpdateOilChange } from './dto/oil-change.dto';
import { FileService } from 'src/modules/file/file.service';

@Injectable()
export class OilChangeService extends CrudService<OilChange> {
  constructor(
    @InjectRepository(OilChange)
    private readonly oilChangeRepository: Repository<OilChange>,
    private readonly fileService: FileService,
    @InjectDataSource() private readonly dataSource: DataSource,
  ) {
    super(oilChangeRepository);
  }

  public async createOilChange({
    receipt_picture,
    vehicle_picture,
    ...oil_change_dto
  }: CreateOilChange) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();

    try {
      let vehicle_picture_id;
      let receipt_picture_id;

      console.log('test');

      if (vehicle_picture) {
        const saved_vehicle_picture = await this.fileService.uploadImageSharp(
          await vehicle_picture,
          queryRunner.manager,
          queryRunner,
        );

        vehicle_picture_id = saved_vehicle_picture.id;
      }

      if (receipt_picture) {
        const saved_receipt_picture = await this.fileService.uploadImageSharp(
          await receipt_picture,
          queryRunner.manager,
          queryRunner,
        );

        receipt_picture_id = saved_receipt_picture.id;
      }

      const oil_change = await queryRunner.manager.save(OilChange, {
        ...oil_change_dto,
        vehicle_picture_id,
        receipt_picture_id,
      });

      await queryRunner.commitTransaction();

      return this.findOneById(oil_change.id);
    } catch (error) {
      console.log(error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  public async updateOilChange({
    receipt_picture,
    vehicle_picture,
    ...oil_change_dto
  }: UpdateOilChange) {
    const old_oil_change = await this.findOneById(oil_change_dto.id);

    if (vehicle_picture) {
      await this.fileService.updateImageSharp(
        await vehicle_picture,
        old_oil_change.vehicle_picture_id,
      );
    }

    if (receipt_picture) {
      await this.fileService.updateImageSharp(
        await receipt_picture,
        old_oil_change.receipt_picture_id,
      );
    }

    return await this.updateAndReturn(oil_change_dto.id, oil_change_dto);
  }
}
