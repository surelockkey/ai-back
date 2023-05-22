import { Injectable } from '@nestjs/common';
import { WorkizCoreApiService } from '../api/workiz-api/workiz-core.service';
import { WorkizContainer, WorkizContainerInfo } from '../api/workiz-api/dto/container.dto';
import { ItemTemplateService } from './item-template/item-template.service';
import { ItemTemplate } from './item-template/entity/item-template.entity';
import { FindContainerAndTemplate } from './dto/find-container-and-template.dto';
import { GraphQLError } from 'graphql';
import { ItemCompareResult } from './item-template/dto/item-compare-result.dto';

@Injectable()
export class CarInventoryService {
  constructor(
    private readonly workizCoreApiService: WorkizCoreApiService,
    private readonly itemTemplateService: ItemTemplateService,
  ) {}

  public findAllContainers(): Promise<{ data: WorkizContainer[] }> {
    return this.workizCoreApiService.req({}, '/ajaxc/inv_container/', 'get');
  }

  public async findContainerAndTemplateById(workiz_id: string): Promise<FindContainerAndTemplate> {
    const container = await this.findContainer(workiz_id);
    const template = await this.findItemTemplate(workiz_id);

    return {
      container,
      template,
    }
  }

  public async generateDifferenceReport(workiz_id: string, only_less: boolean): Promise<ItemCompareResult[]> {
    const container = await this.findContainer(workiz_id);
    return this.itemTemplateService.checkItemQuantity(container, workiz_id, only_less);
  }

  private async findContainer(workiz_id: string): Promise<WorkizContainerInfo[]> {
    const container = await this.workizCoreApiService.req({}, `/ajaxc/inv_container_items/getContainersStock/${workiz_id}/`, 'get');

    if (!container?.data?.length) {
      throw new GraphQLError('Container not found');
    }

    return container.data;
  }

  private async findItemTemplate(workiz_id: string): Promise<ItemTemplate[]> {
    const item_template = await this.itemTemplateService.findAll({ workiz_id  });

    if (item_template.length) return item_template;

    return await this.itemTemplateService.saveDefaultItemTemplate(workiz_id);
  }

}
