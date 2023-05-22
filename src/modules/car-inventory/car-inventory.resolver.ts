import { Args, Query, Resolver } from '@nestjs/graphql';
import { CarInventoryService } from './car-inventory.service';
import { WorkizContainer, WorkizContainerInfo } from '../api/workiz-api/dto/container.dto';
import { FindContainerAndTemplate } from './dto/find-container-and-template.dto';

@Resolver()
export class CarInventoryResolver {
  constructor(private readonly carInventoryService: CarInventoryService) {}

  @Query(() => [WorkizContainer])
  async getAllContainers() {
    return (await this.carInventoryService.findAllContainers()).data;
  }

  @Query(() => FindContainerAndTemplate)
  async getContainerById(
    @Args('id', { type: () => String })
    id: string
  ) {    
    return (await this.carInventoryService.findContainerAndTemplateById(id));
  }
}
