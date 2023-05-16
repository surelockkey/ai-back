import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { TechScheduleService } from './tech-schedule.service';
import {
  CreateTechScheduleDto,
  UpdateTechScheduleDto,
} from './dto/tech-schedule.dto';
import { TechSchedule } from './entity/tech-schedule.entity';
import { LoggerService } from 'src/modules/logger/logger.service';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { CurrentUserDto } from 'src/modules/authorization/dto/current-user.dto';
import { CurrentUser } from '@tech-slk/nest-auth';

@Resolver()
export class TechScheduleResolver {
  constructor(
    private readonly techScheduleService: TechScheduleService,
    private readonly loggerService: LoggerService,
  ) {}

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => TechSchedule)
  createTechSchedule(
    @Args('tech_schedule', { type: () => CreateTechScheduleDto })
    tech_schedule: CreateTechScheduleDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techScheduleService.create(tech_schedule),
      user_id,
      action: 'Tried to create tech schedule',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => [TechSchedule])
  createManyTechsSchedules(
    @Args('techs_schedules', { type: () => [CreateTechScheduleDto] })
    techs_schedules: CreateTechScheduleDto[],
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techScheduleService.createMany(techs_schedules),
      user_id,
      action: 'Tried to create many tech schedule',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => TechSchedule)
  updateTechSchedule(
    @Args('tech_schedule', { type: () => UpdateTechScheduleDto })
    tech_schedule: UpdateTechScheduleDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () =>
        this.techScheduleService.updateAndReturn(
          tech_schedule.id,
          tech_schedule,
        ),
      user_id,
      action: 'Tried to update tech schedule',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => [TechSchedule])
  updateManyTechsSchedules(
    @Args('techs_schedules', { type: () => [UpdateTechScheduleDto] })
    techs_schedules: UpdateTechScheduleDto[],
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () =>
        this.techScheduleService.updateManyTechsSchedules(techs_schedules),
      user_id,
      action: 'Tried to update many tech schedule',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => ID)
  deleteTechSchedule(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techScheduleService.deleteByIdReturnId(id),
      user_id,
      action: 'Tried to delete tech schedule',
    });
  }
}
