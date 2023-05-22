import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarInventoryService } from './car-inventory.service';
import { WorkizContainer, WorkizContainerInfo } from '../api/workiz-api/dto/container.dto';
import { FindContainerAndTemplate } from './dto/find-container-and-template.dto';
import { ItemCompareResult } from './item-template/dto/item-compare-result.dto';

@Resolver()
export class CarInventoryResolver {
  constructor(private readonly carInventoryService: CarInventoryService) {}

  @Query(() => [WorkizContainer])
  async getAllContainers(): Promise<WorkizContainer[]> {
    return (await this.carInventoryService.findAllContainers()).data;
  }

  @Query(() => FindContainerAndTemplate)
  async getContainerById(
    @Args('id', { type: () => String })
    id: string
  ): Promise<FindContainerAndTemplate> {   
    return await this.carInventoryService.findContainerAndTemplateById(id);
  }

  @Query(() => [ItemCompareResult])
  generateDifferenceReport(
    @Args('workiz_id', { type: () => String }) 
    workiz_id: string,
    @Args('only_less', { type: () => Boolean, defaultValue: true })
    only_less: boolean,
  ) {
    return this.carInventoryService.generateDifferenceReport(workiz_id, only_less);
  }
}