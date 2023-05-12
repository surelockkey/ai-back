import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { TechScheduleService } from './tech-schedule.service';
// import { TechSchedule } from '../../api/google-sheets-api/dto/tech-schedule.dto';
import {
  CreateTechScheduleDto,
  UpdateTechScheduleDto,
} from './dto/tech-schedule.dto';
import { In } from 'typeorm';
import { TechSchedule } from './entity/tech-schedule.entity';

@Resolver()
export class TechScheduleResolver {
  constructor(private readonly techScheduleService: TechScheduleService) {}

  @Mutation(() => TechSchedule)
  createTechSchedule(
    @Args('tech_schedule', { type: () => CreateTechScheduleDto })
    tech_schedule: CreateTechScheduleDto,
  ) {
    return this.techScheduleService.create(tech_schedule);
  }

  @Mutation(() => [TechSchedule])
  createManyTechsSchedules(
    @Args('techs_schedules', { type: () => [CreateTechScheduleDto] })
    techs_schedules: CreateTechScheduleDto[],
  ) {
    return this.techScheduleService.createMany(techs_schedules);
  }

  @Mutation(() => TechSchedule)
  updateTechSchedule(
    @Args('tech_schedule', { type: () => UpdateTechScheduleDto })
    tech_schedule: UpdateTechScheduleDto,
  ) {
    return this.techScheduleService.updateAndReturn(
      tech_schedule.id,
      tech_schedule,
    );
  }

  @Mutation(() => [TechSchedule])
  updateManyTechsSchedules(
    @Args('techs_schedules', { type: () => [UpdateTechScheduleDto] })
    techs_schedules: UpdateTechScheduleDto[],
  ) {
    return this.techScheduleService.updateManyTechsSchedules(techs_schedules);
  }

  @Mutation(() => ID)
  deleteTechSchedule(@Args('id', { type: () => ID }) id: string) {
    return this.techScheduleService.deleteByIdReturnId(id);
  }
}
