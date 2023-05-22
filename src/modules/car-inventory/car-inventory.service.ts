import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { CarInventory } from './entity/car-inventory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateCarInventoryDto } from './dto/car-inventory.dto';
import { ItemTemplateService } from './item-template/item-template.service';
import { WorkizCoreApiService } from '../api/workiz-api/workiz-core.service';

@Injectable()
export class CarInventoryService extends CrudService<CarInventory> {
  constructor(
    @InjectRepository(CarInventory)
    private readonly carInventoryRepository: Repository<CarInventory>,
    private readonly dataSource: DataSource,
    private readonly itemTemplateService: ItemTemplateService,
    private readonly workizCoreApiService: WorkizCoreApiService,
  ) {
    super(carInventoryRepository);
  }

  // public async createCarInventory(car_inventory_dto: CreateCarInventoryDto) {
  //   const queryRunner = await this.dataSource.createQueryRunner();
  //   await queryRunner.startTransaction();

  //   try {
  //     const car_inventory = await queryRunner.manager.save(
  //       CarInventory,
  //       car_inventory_dto,
  //     );

  //     await this.itemTemplateService.saveDefaultItemTemplate(
  //       car_inventory.id,
  //       queryRunner,
  //     );

  //     await queryRunner.commitTransaction();

  //     const res = await this.findOneById(car_inventory.id);

  //     //   res.item_templates.forEach((i) => {
  //     //     if (
  //     //       !i.id |
  //     //       !i.car_inventory_id ||
  //     //       !i.quantity ||
  //     //       !i.sku ||
  //     //       !i.uhs_sku
  //     //     ) {
  //     //       console.log(i);
  //     //     }
  //     //   });

  //     //   console.log('====================================');
  //     //   console.log(res);
  //     //   console.log('====================================');

  //     return res;
  //   } catch (error) {
  //     await queryRunner.rollbackTransaction();
  //   } finally {
  //     await queryRunner.release();
  //   }
  // }

  public async findAllContainers () {
    return await this.workizCoreApiService.req({}, '/ajaxc/inv_container/', 'get');
  }

  public async findContainerById (id: string) {
    return await this.workizCoreApiService.req({}, `/ajaxc/inv_container_items/getContainersStock/${id}/`, 'get');
  }
}
