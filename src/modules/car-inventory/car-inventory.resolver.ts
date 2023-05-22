import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarInventoryService } from './car-inventory.service';
import { CarInventory } from './entity/car-inventory.entity';
import {
  CreateCarInventoryDto,
  UpdateCarInventoryDto,
} from './dto/car-inventory.dto';

@Resolver()
export class CarInventoryResolver {
  constructor(private readonly carInventoryService: CarInventoryService) {}

  @Mutation(() => CarInventory)
  async createCarInventory(
    @Args('car_inventory', { type: () => CreateCarInventoryDto })
    car_inventory: CreateCarInventoryDto,
  ) {
    const res = await this.carInventoryService.createCarInventory(
      car_inventory,
    );

    return res;
  }

  @Query(() => [CarInventory])
  getAllCarInventories() {
    return this.carInventoryService.findAll();
  }

  @Mutation(() => CarInventory)
  updateCarInventory(
    @Args('car_inventory', { type: () => UpdateCarInventoryDto })
    car_inventory: UpdateCarInventoryDto,
  ) {
    return this.carInventoryService.updateAndReturn(
      car_inventory.id,
      car_inventory,
    );
  }

  @Mutation(() => ID)
  deleteCarInventory(@Args('id', { type: () => ID }) id: string) {
    return this.carInventoryService.deleteByIdReturnId(id);
  }
}
