import { Injectable } from '@nestjs/common';
import { WorkizCoreApiService } from '../api/workiz-api/workiz-core.service';
import {
  WorkizContainer,
  WorkizContainerInfo,
} from '../api/workiz-api/dto/container.dto';
import { FindContainerAndTemplate } from './dto/find-container-and-template.dto';
import { GraphQLError } from 'graphql';
import { ItemCompareResult } from './dto/item-compare-result.dto';
import { TemplateService } from './modules/template/template.service';
import { CarTemplateService } from './modules/car-template/car-template.service';
import { DataSource } from 'typeorm';
import * as _ from 'lodash';

@Injectable()
export class CarInventoryService {
  constructor(
    private readonly workizCoreApiService: WorkizCoreApiService,
    private readonly templateService: TemplateService,
    private readonly carTemplateService: CarTemplateService,
    private readonly dataSource: DataSource,
  ) {}

  public findAllContainers(): Promise<{ data: WorkizContainer[] }> {
    return this.workizCoreApiService.req('/ajaxc/inv_container/', 'get');
  }

  public async findContainerAndTemplateById(
    workiz_id: string,
  ): Promise<FindContainerAndTemplate> {
    const container = await this.findContainer(workiz_id);
    const template = await this.templateService.findAll({
      car_templates: {
        workiz_id,
      },
    });

    return {
      container,
      template,
    };
  }

  private async findContainer(
    workiz_id: string,
  ): Promise<WorkizContainerInfo[]> {
    const container = await this.workizCoreApiService.req(
      `/ajaxc/inv_container_items/getContainersStock/${workiz_id}/`,
      'get',
    );

    if (!container?.data?.length) {
      throw new GraphQLError('Container not found');
    }

    return container.data;
  }

  public async generateDifferenceReportForAll() {
    const { data: containers } = await this.findAllContainers();

    const all_differences = await Promise.all(
      containers.map((container) => {
        return this.generateDifferenceReport(container.id, true);
      }),
    );

    // console.log(all_test, all_differences.length, Object.keys(all_test).length);

    const res = _(all_differences.flat())
      .groupBy((item) => `${item.sku}_${item.uhs_sku}`)
      .map((items, key) => {
        const skus = key.split('_');
        return {
          sku: skus[0],
          uhs_sku: skus[1],
          name: items[0].name,
          length: items.length,
          actual_quantity: _.sumBy(items, 'actual_quantity'),
          template_quantity: _.sumBy(items, 'template_quantity'),
          difference: _.sumBy(items, 'difference'),
          items,
        };
      })
      .value();

    return res;
  }

  public async generateDifferenceReport(
    workiz_id: string,
    only_less: boolean,
  ): Promise<ItemCompareResult[]> {
    const container_items = await this.findContainer(workiz_id);

    const template_items = (
      await this.carTemplateService.findOneItem({
        where: { workiz_id },
        relations: ['template'],
      })
    )?.template?.items;
    const result: ItemCompareResult[] = [];

    template_items?.forEach((template_item) => {
      const car_item = container_items.find((car_item) =>
        car_item.item_name.includes(`${template_item.sku}`),
      );

      if (car_item) {
        if (Number(car_item.qty) !== template_item.quantity) {
          result.push({
            name: car_item.item_name,
            sku: template_item.sku,
            uhs_sku: template_item.uhs_sku,
            actual_quantity: Number(car_item.qty) | 0,
            template_quantity: template_item.quantity,
            difference: Number(car_item.qty) - template_item.quantity,
            template_item_id: template_item.id,
          });
        }
      } else {
        result.push({
          name: '',
          sku: template_item.sku,
          uhs_sku: template_item.uhs_sku,
          actual_quantity: 0,
          template_quantity: template_item.quantity,
          difference: -template_item.quantity,
          template_item_id: template_item.id,
        });
      }
    });

    if (only_less) {
      return result.filter((item) => item.difference < 0);
    }

    return result;
  }
}
