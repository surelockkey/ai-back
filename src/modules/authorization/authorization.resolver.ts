import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  ChangePasswordDto,
  CurrentUser,
  LoginCredential,
  TokenResponse,
} from '@tech-slk/nest-auth';
import { SendDto } from '@tech-slk/nest-crud';
import { AuthorizationService } from './authorization.service';
import { CurrentUserDto } from './dto/current-user.dto';
import { RegistrationDto } from './dto/registration.dto';
import { User } from '../user/entity/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guard/auth.guard';
import { LoggerService } from '../logger/logger.service';
import { InvitedUser } from '../user/entity/invited-user.entity';
import { AcceptInviteDto } from './dto/accept-invite.dto';
import { RoleGuard } from './decorator/role.decorator';
import { UserRole } from '../user/enum/user-role.enum';
import { InviteUserDto } from './dto/invite-user.dto';
import { RegistrationCustomerDto } from './dto/registration-customer.dto';

@Resolver()
export class AuthorizationResolver {
  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly loggerService: LoggerService,
  ) {}

  @Mutation(() => TokenResponse)
  public async login(
    @Args('login_dto', { type: () => LoginCredential })
    login_dto: LoginCredential,
  ): Promise<TokenResponse> {
    return this.loggerService.actionLog({
      callback: () => this.authorizationService.loginEmailPass(login_dto),
      action: 'Tried to login',
    });
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SendDto)
  public async logout(
    @Args('refresh_token', { type: () => String })
    refresh_token: string,
    @CurrentUser()
    user: CurrentUserDto,
  ): Promise<SendDto> {
    return this.loggerService.actionLog({
      callback: () =>
        this.authorizationService.logout(user.user_id, refresh_token),
      action: 'Tried to logout',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => InvitedUser)
  public async inviteUserToApp(
    @Args('inviteUserDto', { type: () => InviteUserDto })
    inviteUserDto: InviteUserDto,
    @CurrentUser()
    { user_id }: CurrentUserDto,
  ): Promise<InvitedUser> {
    return this.loggerService.actionLog({
      callback: () =>
        this.authorizationService.inviteUserToApp(inviteUserDto, user_id),
      action: `Tried to invite user with email ${inviteUserDto.email}`,
      user_id: user_id,
    });
  }

  @Mutation(() => User)
  registrationCustomer(
    @Args('registration_dto', { type: () => RegistrationCustomerDto })
    registration_dto: RegistrationCustomerDto,
  ) {
    return this.authorizationService.registrationCustomer(registration_dto);
  }

  @Mutation(() => User)
  public async acceptInvite(
    @Args('accept_invite_dto', { type: () => AcceptInviteDto })
    accept_invite_dto: AcceptInviteDto,
  ): Promise<User> {
    return this.loggerService.actionLog({
      callback: () =>
        this.authorizationService.acceptInviteToApp(accept_invite_dto),
      action: `Tried to accept invite, key: ${accept_invite_dto.key}`,
    });
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SendDto)
  changePassword(
    @Args('passwords', { type: () => ChangePasswordDto })
    passwords: ChangePasswordDto,
    @CurrentUser() { email }: CurrentUserDto,
  ) {
    return this.authorizationService.changePassword(passwords, email);
  }

  @RoleGuard(UserRole.ADMIN)
  @Mutation(() => SendDto)
  changeUserPassByEmail(
    @Args('email') email: string,
    @Args('new_password') new_password: string,
  ) {
    return this.authorizationService.changeUserPassByEmail(email, new_password);
  }
}
