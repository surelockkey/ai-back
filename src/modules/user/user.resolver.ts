import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../authorization/guard/auth.guard';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from '../authorization/dto/current-user.dto';
import { UseGuards } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { RoleGuard } from '../authorization/decorator/role.decorator';
import { UserRole } from './enum/user-role.enum';
import { UpdateCurrentUserDto } from './dto/user.input';
@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  public async getCurrentUser(
    @CurrentUser()
    { user_id }: CurrentUserDto,
  ): Promise<User> {
    return this.userService.findOne({ id: user_id });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Query(() => [User])
  public async getAllUsers(
    @CurrentUser() user: CurrentUserDto,
  ): Promise<User[]> {
    return this.userService.findAllUsers(user.user_id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  updateCurrentUser(
    @Args('user', { type: () => UpdateCurrentUserDto })
    user: UpdateCurrentUserDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.userService.updateAndReturn(user_id, user);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => [String])
  public async deleteManyUsers(
    @Args('user_ids', { type: () => [ID] })
    user_ids: string[],
  ): Promise<string[]> {
    await this.userService.deleteManyByIds(user_ids);
    return user_ids;
  }
}
