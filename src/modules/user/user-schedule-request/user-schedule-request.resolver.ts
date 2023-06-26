import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { UserScheduleRequestService } from './user-schedule-request.service';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from '../enum/user-role.enum';
import { UserScheduleRequest } from './entity/user-schedule-request.entity';
import { CreateUserScheduleRequestDto } from './dto/user-schedule-request.dto';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from 'src/modules/authorization/dto/current-user.dto';

@Resolver()
export class UserScheduleRequestResolver {
  constructor(
    private readonly userScheduleRequestService: UserScheduleRequestService,
  ) {}

  @RoleGuard(UserRole.DISPATCHER, UserRole.TECHNICIAN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => UserScheduleRequest)
  createUserScheduleRequest(
    @Args('schedule_request', { type: () => CreateUserScheduleRequestDto })
    schedule_request: CreateUserScheduleRequestDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.userScheduleRequestService.create({
      ...schedule_request,
      user_id,
    });
  }

  @RoleGuard(
    UserRole.DISPATCHER,
    UserRole.TECHNICIAN,
    UserRole.MAIN_DISPATCHER,
    UserRole.ADMIN,
  )
  @Mutation(() => ID)
  deleteUserScheduleRequest(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() { user_id, role }: CurrentUserDto,
  ): Promise<string> {
    return this.userScheduleRequestService.deleteUserScheduleRequest(
      id,
      role,
      user_id,
    );
  }
}
