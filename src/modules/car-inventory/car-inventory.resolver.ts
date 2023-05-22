import { Args, Query, Resolver } from '@nestjs/graphql';
import { CarInventoryService } from './car-inventory.service';

import { WorkizContainer, WorkizContainerInfo } from '../api/workiz-api/dto/container.dto';

@Resolver()
export class CarInventoryResolver {
  constructor(private readonly carInventoryService: CarInventoryService) {}

  @Query(() => [WorkizContainer])
  async getAllContainers() {
    return (await this.carInventoryService.findAllContainers()).data;
  }

  @Query(() => [WorkizContainerInfo])
  async getContainerById(
    @Args('id', { type: () => String })
    id: string
  ) {    
    return (await this.carInventoryService.findContainerById(id)).data;
  }

    // @Mutation(() => CarInventory)
    // async createCarInventory(
    //   @Args('car_inventory', { type: () => CreateCarInventoryDto })
    //   car_inventory: CreateCarInventoryDto,
    // ) {
    //   const res = await this.carInventoryService.createCarInventory(
    //     car_inventory,
    //   );

    //   return res;
    // }
    
    // @Query(() => [CarInventory])
    // getAllCarInventories() {
    //   return this.carInventoryService.findAll();
    // }
  
    // @Mutation(() => CarInventory)
    // updateCarInventory(
    //   @Args('car_inventory', { type: () => UpdateCarInventoryDto })
    //   car_inventory: UpdateCarInventoryDto,
    // ) {
    //   return this.carInventoryService.updateAndReturn(
    //     car_inventory.id,
    //     car_inventory,
    //   );
    // }
  
    // @Mutation(() => ID)
    // deleteCarInventory(@Args('id', { type: () => ID }) id: string) {
    //   return this.carInventoryService.deleteByIdReturnId(id);
    // }
}
