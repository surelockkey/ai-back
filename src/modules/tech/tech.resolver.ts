import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TechService } from './tech.service';
import { Tech } from './entity/tech.entity';
import { CreateTechDto, TechWithSchedule, UpdateTechDto } from './dto/tech.dto';

@Resolver()
export class TechResolver {
  constructor(private readonly techService: TechService) {}

  @Mutation(() => Tech)
  createTech(@Args('tech', { type: () => CreateTechDto }) tech: CreateTechDto) {
    return this.techService.create(tech);
  }

  @Mutation(() => Tech)
  updateTech(@Args('tech', { type: () => UpdateTechDto }) tech: UpdateTechDto) {
    return this.techService.updateAndReturn(tech.id, tech);
  }

  @Query(() => [Tech])
  getAllTechs() {
    return this.techService.findAll();
  }

  @Mutation(() => Tech)
  createTechFromWorkiz(@Args('workiz_id') workiz_id: string) {
    return this.techService.createTechFromWorkiz(workiz_id);
  }

  @Query(() => [TechWithSchedule])
  getTechsWithSchedule(
    @Args('from', { type: () => Int }) from: number,
    @Args('to', { type: () => Int }) to: number,
  ) {
    return this.techService.getTechsWithSchedule(from, to);
  }
}
