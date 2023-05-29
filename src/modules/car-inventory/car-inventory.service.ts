import { Injectable } from '@nestjs/common';
import { WorkizCoreApiService } from '../api/workiz-api/workiz-core.service';
import { WorkizContainer, WorkizContainerInfo } from '../api/workiz-api/dto/container.dto';
import { FindContainerAndTemplate } from './dto/find-container-and-template.dto';
import { GraphQLError } from 'graphql';
import { ItemCompareResult } from './dto/item-compare-result.dto';
import { TemplateService } from './modules/template/template.service';
import { CarTemplateService } from './modules/car-template/car-template.service';
import { DataSource } from 'typeorm';
import { Template } from './modules/template/entity/template.entity';
import { CreateTemplateDto } from './modules/template/dto/template.dto';
import { CarTemplate } from './modules/car-template/entity/car-template.entity';

@Injectable()
export class CarInventoryService {
  constructor(
    private readonly workizCoreApiService: WorkizCoreApiService,
    private readonly templateService: TemplateService,
    private readonly carTemplateService: CarTemplateService,
    private readonly dataSource: DataSource,
  ) {}

  public findAllContainers(): Promise<{ data: WorkizContainer[] }> {
    return this.workizCoreApiService.req({}, '/ajaxc/inv_container/', 'get');
  }

  public async findContainerAndTemplateById(workiz_id: string): Promise<FindContainerAndTemplate> {
    const container = await this.findContainer(workiz_id);
    const template = await this.templateService.findAll({ 
      car_templates: {
        workiz_id,
      }
     });

    return {
      container,
      template,
    }
  }

  private async findContainer(workiz_id: string): Promise<WorkizContainerInfo[]> {
    const container = await this.workizCoreApiService.req({}, `/ajaxc/inv_container_items/getContainersStock/${workiz_id}/`, 'get');

    if (!container?.data?.length) {
      throw new GraphQLError('Container not found');
    }

    return container.data;
  }

  public async generateDifferenceReport(workiz_id: string, only_less: boolean): Promise<ItemCompareResult[]> {
    const container_items = await this.findContainer(workiz_id);
    const template_items = (await this.carTemplateService.findOne({ workiz_id }))?.template?.items;
    const result: ItemCompareResult[] = [];

    template_items.forEach((template_item) => {
      const car_item = container_items.find((car_item) =>
        car_item.item_name.includes(`(SLK-${template_item.sku})`),
      );

      if (car_item) {
        if (Number(car_item.qty) !== template_item.quantity) {
          result.push({
            name: car_item.item_name,
            sku: template_item.sku,
            uhs_sku: template_item.uhs_sku,
            actual_quantity: Number(car_item.qty) | 0,
            template_quantity: template_item.quantity,
            difference: Number(car_item.qty) | 0 - template_item.quantity,
          });
        }
      }
    });

    if (only_less) {
      result.filter((item) => item.difference < 0);
    }

    return result;
  }

  // public async createTemplate(createTemplateDto: CreateTemplateDto): Promise<Template> {
  //   const queryRunner = this.dataSource.createQueryRunner();
  //   await queryRunner.startTransaction();
  //   const { workiz_id, ...rest } = createTemplateDto;

  //   try {
  //     const template = await queryRunner.manager.save(Template, rest);

  //     await queryRunner.manager.save(CarTemplate, {
  //       template_id: template.id,
  //       workiz_id,
  //     });

  //     await queryRunner.commitTransaction();
      
  //     return template;
  //   } catch (error) {
  //     await queryRunner.rollbackTransaction();
  //     throw new GraphQLError(error.message, { originalError: error });
  //   } finally {
  //     await queryRunner.release();
  //   }
  // }
}
