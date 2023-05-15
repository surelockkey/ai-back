import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TechService } from './tech.service';
import { Tech } from './entity/tech.entity';
import { CreateTechDto, TechWithSchedule, UpdateTechDto } from './dto/tech.dto';
import { TechnicianWorkiz } from '../api/workiz-api/dto/workiz-api.dto';
import { CreateTechFromWorkizDto } from './dto/workiz-tech.dto';

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
  createTechFromWorkiz(
    @Args('workiz_id') workiz_id: string,
    @Args('state', { nullable: true }) state?: string,
  ) {
    return this.techService.createTechFromWorkiz(workiz_id, state);
  }

  @Mutation(() => [Tech])
  createManyTechsFromWorkiz(
    @Args('techs', { type: () => [CreateTechFromWorkizDto] })
    techs: CreateTechFromWorkizDto[],
  ) {
    return this.techService.createManyTechsFromWorkiz(techs);
  }

  @Query(() => [TechWithSchedule])
  getTechsWithSchedule(
    @Args('from', { type: () => Int }) from: number,
    @Args('to', { type: () => Int }) to: number,
    @Args('search_value', { nullable: true }) search_value?: string,
    @Args('is_available', { nullable: true, type: () => Boolean })
    is_available?: boolean,
    @Args('state', { nullable: true }) state?: string,
  ) {
    return this.techService.getTechsWithSchedule(
      from,
      to,
      search_value,
      is_available,
      state,
    );
  }

  @Query(() => [TechnicianWorkiz])
  getTechsWorkizWithoutAdded() {
    return this.techService.getTechsWorkizWithoutAdded();
  }
}
