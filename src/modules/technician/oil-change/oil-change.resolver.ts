import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OilChangeService } from './oil-change.service';
import { OilChange } from './entity/oil-change.entity';
import { CreateOilChange, UpdateOilChange } from './dto/oil-change.dto';

@Resolver()
export class OilChangeResolver {
  constructor(private readonly oilChangeService: OilChangeService) {}

  @Mutation(() => OilChange)
  createOilChange(
    @Args('oil_change', { type: () => CreateOilChange })
    oil_change: CreateOilChange,
  ) {
    return this.oilChangeService.createOilChange(oil_change);
  }

  @Mutation(() => OilChange)
  updateOilChange(
    @Args('oil_change', { type: () => UpdateOilChange })
    oil_change: UpdateOilChange,
  ) {
    return this.oilChangeService.updateOilChange(oil_change);
  }

  @Mutation(() => ID)
  deleteOilChange(@Args('id', { type: () => ID }) id: string) {
    return this.oilChangeService.deleteByIdReturnId(id);
  }

  @Query(() => [OilChange])
  getOilChanges() {
    return this.oilChangeService.findAll();
  }
}
