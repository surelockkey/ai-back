import { Injectable } from '@nestjs/common';
import { WorkizCoreApiService } from '../api/workiz-api/workiz-core.service';
import { WorkizContainer, WorkizContainerInfo } from '../api/workiz-api/dto/container.dto';
import { ItemTemplateService } from './item-template/item-template.service';
import { ItemTemplate } from './item-template/entity/item-template.entity';
import { FindContainerAndTemplate } from './dto/find-container-and-template.dto';
import { GraphQLError } from 'graphql';

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
    const container = await this.workizCoreApiService.req({}, `/ajaxc/inv_container_items/getContainersStock/${workiz_id}/`, 'get');

    if (!container?.data?.length) {
      throw new GraphQLError('Container not found');
    }

    const template = await this.findItemTemplate(workiz_id);

    console.log({
      container: container.data,
      template,
    })

    return {
      container: container.data,
      template,
    }
  }

  private async findItemTemplate(workiz_id: string): Promise<ItemTemplate[]> {
    const item_template = await this.itemTemplateService.findAll({ workiz_id  });

    if (item_template.length) return item_template;

    return await this.itemTemplateService.saveDefaultItemTemplate(workiz_id);
  }
}
