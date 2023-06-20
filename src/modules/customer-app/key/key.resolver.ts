import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { KeyService } from './key.service';
import { Key } from './entity/key.entity';
import { CreateKeyDto, UpdateKeyDto } from './dto/key.dto';

@Resolver()
export class KeyResolver {
  constructor(private readonly keyService: KeyService) {}

  @Mutation(() => Key)
  createKey(
    @Args('key_dto', { type: () => CreateKeyDto }) key_dto: CreateKeyDto,
  ): Promise<Key> {
    return this.keyService.createKey(key_dto);
  }

  @Mutation(() => Key)
  updateKey(
    @Args('key_dto', { type: () => UpdateKeyDto }) key_dto: UpdateKeyDto,
  ): Promise<Key> {
    return this.keyService.updateKey(key_dto);
  }

  @Mutation(() => ID)
  deleteKey(@Args('id', { type: () => ID }) id: string) {
    return this.keyService.deleteByIdReturnId(id);
  }

  @Query(() => [Key])
  getKeysByCar(@Args('car_id', { type: () => ID }) car_id: string) {
    return this.keyService.getKeysByCar(car_id);
  }

  @Query(() => Key)
  getKeyByID(@Args('id', { type: () => ID }) id: string) {
    return this.keyService.findOneById(id);
  }
}
