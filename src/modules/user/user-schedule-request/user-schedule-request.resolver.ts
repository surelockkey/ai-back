import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { UserScheduleRequestService } from './user-schedule-request.service';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from '../enum/user-role.enum';
import { UserScheduleRequest } from './entity/user-schedule-request.entity';
import { CreateOrUpdateUserScheduleRequestDto } from './dto/user-schedule-request.dto';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from 'src/modules/authorization/dto/current-user.dto';

@Resolver()
export class UserScheduleRequestResolver {
  constructor(
    private readonly userScheduleRequestService: UserScheduleRequestService,
  ) {}

  @RoleGuard(UserRole.DISPATCHER, UserRole.TECHNICIAN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => [UserScheduleRequest])
  createOrUpdateUserScheduleRequest(
    @Args('schedule_request', { type: () => [CreateOrUpdateUserScheduleRequestDto] })
    schedule_request: CreateOrUpdateUserScheduleRequestDto[],
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.userScheduleRequestService.createOrUpdateUserScheduleRequest(
      schedule_request.map((r) => ({
        ...r,
        user_id
      }))
    );
  }

  @RoleGuard(
    UserRole.DISPATCHER,
    UserRole.TECHNICIAN,
    UserRole.MAIN_DISPATCHER,
    UserRole.ADMIN,
  )
  @Mutation(() => [ID])
  deleteManyUserScheduleRequest(
    @Args('ids', { type: () => [ID] }) ids: string[],
    @CurrentUser() { user_id, role }: CurrentUserDto,
  ): Promise<string[]> {
    return this.userScheduleRequestService.deleteManyUserScheduleRequest(
      ids,
      role,
      user_id,
    );
  }

  // @RoleGuard(
  //   UserRole.DISPATCHER,
  //   UserRole.TECHNICIAN,
  //   UserRole.MAIN_DISPATCHER,
  //   UserRole.ADMIN,
  // )
  // @Mutation(() => ID)
  // deleteUserScheduleRequest(
  //   @Args('id', { type: () => ID }) id: string,
  //   @CurrentUser() { user_id, role }: CurrentUserDto,
  // ): Promise<string> {
  //   return this.userScheduleRequestService.deleteUserScheduleRequest(
  //     id,
  //     role,
  //     user_id,
  //   );
  // }
}
