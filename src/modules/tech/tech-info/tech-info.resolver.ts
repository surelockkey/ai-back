import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { TechInfoService } from './tech-info.service';
import { TechInfo } from './entity/tech-info.entity';
import {
  CreateOrUpdateTechInfoDto,
  CreateTechInfoDto,
  UpdateTechInfoDto,
} from './dto/tech-info.dto';

@Resolver()
export class TechInfoResolver {
  constructor(private readonly techInfoService: TechInfoService) {}

  @Mutation(() => TechInfo)
  createTechInfo(
    @Args('tech_info', { type: () => CreateTechInfoDto })
    tech_info: CreateTechInfoDto,
  ) {
    return this.techInfoService.create(tech_info);
  }

  @Mutation(() => ID)
  deleteTechInfo(@Args('id', { type: () => ID }) id: string) {
    return this.techInfoService.deleteByIdReturnId(id);
  }

  @Mutation(() => TechInfo)
  updateTechInfo(
    @Args('tech_info', { type: () => UpdateTechInfoDto })
    tech_info: UpdateTechInfoDto,
  ) {
    return this.techInfoService.updateAndReturn(tech_info.id, tech_info);
  }

  @Mutation(() => [TechInfo])
  createOrUpdateTechInfo(
    @Args('tech_infos', { type: () => [CreateOrUpdateTechInfoDto] })
    tech_infos: CreateOrUpdateTechInfoDto,
  ) {
    return this.techInfoService.createOrUpdateTechInfo(tech_infos);
  }
}