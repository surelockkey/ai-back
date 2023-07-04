import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { KeyCarService } from './key-car.service';
import { KeyCar } from './entity/key-car.entity';

@Resolver()
export class KeyCarResolver {
  constructor(private readonly keyCarService: KeyCarService) {}

  @Mutation(() => [KeyCar])
  addManyCarsToKey(
    @Args('key_id', { type: () => ID }) key_id: string,
    @Args('car_ids', { type: () => [ID] }) car_ids: string[],
  ): Promise<KeyCar[]> {
    return this.keyCarService.addManyCarsToKey(key_id, car_ids);
  }

  @Mutation(() => ID)
  deleteKeyCar(@Args('id', { type: () => ID }) id: string) {
    return this.keyCarService.deleteByIdReturnId(id);
  }

  @Mutation(() => [ID])
  async deleteManyKeyCar(@Args('ids', { type: () => [ID] }) ids: string[]) {
    await this.keyCarService.deleteManyByIds(ids);
    return ids;
  }
}
