import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { UserScheduleService } from './user-schedule.service';
import {
  CreateOrUpdateUserScheduleDto,
  CreateUserScheduleDto,
  UpdateUserScheduleDto,
} from './dto/user-schedule.dto';
import { UserSchedule } from './entity/user-schedule.entity';
import { LoggerService } from 'src/modules/logger/logger.service';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { CurrentUserDto } from 'src/modules/authorization/dto/current-user.dto';
import { CurrentUser } from '@tech-slk/nest-auth';
import { UserScheduleRequest } from '../user-schedule-request/entity/user-schedule-request.entity';

@Resolver()
export class UserScheduleResolver {
  constructor(
    private readonly userScheduleService: UserScheduleService,
    private readonly loggerService: LoggerService,
  ) {}

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => [UserSchedule])
  approveUserScheduleRequest(
    @Args('request_ids', { type: () => [ID] })
    request_ids: string[],
    @CurrentUser() { user_id }: CurrentUserDto,
  ): Promise<UserSchedule[]> {
    return this.loggerService.actionLog({
      callback: () => this.userScheduleService.approveUserScheduleRequest(request_ids),
      user_id,
      action: 'Tried to approve user schedule request',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => [UserScheduleRequest])
  declineUserScheduleRequest(
    @Args('request_ids', { type: () => [ID] })
    request_ids: string[],
    @CurrentUser() { user_id }: CurrentUserDto,
  ): Promise<UserScheduleRequest[]> {
    return this.loggerService.actionLog({
      callback: () => this.userScheduleService.declineUserScheduleRequest(request_ids),
      user_id,
      action: 'Tried to decline user schedule request',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => UserSchedule)
  createUserSchedule(
    @Args('user_schedule', { type: () => CreateUserScheduleDto })
    user_schedule: CreateUserScheduleDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.userScheduleService.create(user_schedule),
      user_id,
      action: 'Tried to create user schedule',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => [UserSchedule])
  createManyUsersSchedules(
    @Args('users_schedules', { type: () => [CreateUserScheduleDto] })
    users_schedules: CreateUserScheduleDto[],
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.userScheduleService.createMany(users_schedules),
      user_id,
      action: 'Tried to create many user schedule',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => UserSchedule)
  updateUserSchedule(
    @Args('user_schedule', { type: () => UpdateUserScheduleDto })
    user_schedule: UpdateUserScheduleDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () =>
        this.userScheduleService.updateAndReturn(
          user_schedule.id,
          user_schedule,
        ),
      user_id,
      action: 'Tried to update user schedule',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => [UserSchedule])
  updateManyUsersSchedules(
    @Args('users_schedules', { type: () => [UpdateUserScheduleDto] })
    users_schedules: UpdateUserScheduleDto[],
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () =>
        this.userScheduleService.updateManyUsersSchedules(users_schedules),
      user_id,
      action: 'Tried to update many user schedule',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => ID)
  deleteUserSchedule(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.userScheduleService.deleteByIdReturnId(id),
      user_id,
      action: 'Tried to delete user schedule',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => [ID])
  deleteManyUserSchedules(
    @Args('ids', { type: () => [ID] }) ids: string[],
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: async () => {
        await this.userScheduleService.deleteManyByIds(ids);
        return ids;
      },
      user_id,
      action: 'Tried to delete many user schedules',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => [UserSchedule])
  createOrUpdateManyUsersSchedules(
    @Args('user_schedules', { type: () => [CreateOrUpdateUserScheduleDto] })
    user_schedules: CreateOrUpdateUserScheduleDto[],
  ) {
    return this.userScheduleService.createOrUpdateManyUsersSchedules(
      user_schedules,
    );
  }
}
