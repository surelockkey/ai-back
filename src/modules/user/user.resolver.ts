import { Args, ID, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GqlAuthGuard } from "../authorization/guard/auth.guard";
import { CurrentUser } from "@tech-slk/nest-auth";
import { CurrentUserDto } from "../authorization/dto/current-user.dto";
import { UseGuards } from "@nestjs/common";
import { User } from "./entity/user.entity";
import { UserService } from "./user.service";
import { RoleGuard } from "../authorization/decorator/role.decorator";
import { UserRole } from "./enum/user-role.enum";
import { UpdateCurrentUserDto } from "./dto/user.input";
import { InvitedUser } from "./entity/invited-user.entity";
import { InvitedUserService } from "./invited-user.service";
import {
  UserWithSchedule,
  UserWithScheduleDto,
} from "./dto/user-with-schedule.dto";
@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly invitedUserService: InvitedUserService
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  public async getCurrentUser(
    @CurrentUser()
    { user_id }: CurrentUserDto
  ): Promise<User> {
    return this.userService.findOne({ id: user_id });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Query(() => [User])
  public async getAllUsers(
    @CurrentUser() user: CurrentUserDto
  ): Promise<User[]> {
    return this.userService.findAllUsers(user.user_id);
  }

  @RoleGuard(UserRole.ADMIN)
  @Query(() => [InvitedUser])
  public async getAllInvitedUsers(
    @CurrentUser() user: CurrentUserDto
  ): Promise<InvitedUser[]> {
    return this.invitedUserService.findAll();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  updateCurrentUser(
    @Args("user", { type: () => UpdateCurrentUserDto })
    user: UpdateCurrentUserDto,
    @CurrentUser() { user_id }: CurrentUserDto
  ) {
    return this.userService.updateAndReturn(user_id, user);
  }

  // TODO: check if main dispatcher can
  @UseGuards(GqlAuthGuard)
  @Mutation(() => [String])
  public async deleteManyUsers(
    @Args("user_ids", { type: () => [ID] })
    user_ids: string[]
  ): Promise<string[]> {
    await this.userService.deleteManyByIds(user_ids);
    return user_ids;
  }

  @RoleGuard(UserRole.ADMIN)
  @Mutation(() => [String])
  public async deleteManyInvitedUsers(
    @Args("user_ids", { type: () => [ID] })
    user_ids: string[]
  ): Promise<string[]> {
    await this.invitedUserService.deleteManyByIds(user_ids);
    return user_ids;
  }

  @Query(() => [UserWithSchedule])
  getUsersWithSchedule(
    @Args("userWithScheduleDto", { type: () => UserWithScheduleDto })
    {
      from,
      to,
      search_value,
      is_available,
      role,
      locations,
    }: UserWithScheduleDto
  ) {
    return this.userService.getUsersWithSchedule(
      from,
      to,
      search_value,
      is_available,
      role,
      locations
    );
  }

  @Query(() => [String, { nullable: true }], { nullable: true })
  getUniqueLocations() {
    return this.userService.getUniqueLocations();
  }
}
