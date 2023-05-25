import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { UserInfoService } from './user-info.service';
import { UserInfo } from './entity/user-info.entity';
import {
  CreateOrUpdateUserInfoDto,
  CreateUserInfoDto,
  UpdateUserInfoDto,
} from './dto/user-info.dto';
import { LoggerService } from 'src/modules/logger/logger.service';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from 'src/modules/authorization/dto/current-user.dto';

@Resolver()
export class UserInfoResolver {
  constructor(
    private readonly userInfoService: UserInfoService,
    private readonly loggerService: LoggerService,
  ) {}

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => UserInfo)
  createUserInfo(
    @Args('user_info', { type: () => CreateUserInfoDto })
    user_info: CreateUserInfoDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.userInfoService.create(user_info),
      user_id,
      action: 'Tried to create user info',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => ID)
  deleteUserInfo(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.userInfoService.deleteByIdReturnId(id),
      user_id,
      action: 'Tried to delete user info',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => UserInfo)
  updateUserInfo(
    @Args('user_info', { type: () => UpdateUserInfoDto })
    user_info: UpdateUserInfoDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () =>
        this.userInfoService.updateAndReturn(user_info.id, user_info),
      user_id,
      action: 'Tried to update user info',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => [UserInfo])
  createOrUpdateUserInfo(
    @Args('user_infos', { type: () => [CreateOrUpdateUserInfoDto] })
    user_infos: CreateOrUpdateUserInfoDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.userInfoService.createOrUpdateUserInfo(user_infos),
      user_id,
      action: 'Tried to create or update user info',
    });
  }
}
