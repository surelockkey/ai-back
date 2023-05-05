import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CurrentUser,
  LoginCredential,
  TokenResponse,
} from '@tech-slk/nest-auth';
import { SendDto } from '@tech-slk/nest-crud';
import { AuthorizationService } from './authorization.service';
import { CurrentUserDto } from './dto/current-user.dto';
import { RegistrationDto } from "./dto/registration.dto";
import { User } from "../user/entity/user.entity";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "./guard/auth.guard";
import { LoggerService } from "../logger/logger.service";
import { InvitedUser } from '../user/entity/invited-user.entity';
import { AcceptInviteDto } from './dto/accept-invite.dto';

@Resolver()
export class AuthorizationResolver {
    constructor(
        private readonly authorizationService: AuthorizationService,
        private readonly loggerService: LoggerService,
    ) { }

    @Mutation(() => User)
    public async registration(
        @Args('registration_dto', { type: () => RegistrationDto })
        registration_dto: RegistrationDto,
    ): Promise<User> {
        return this.loggerService.actionLog({
            callback: () => this.authorizationService.registration(registration_dto),
            action: 'Tried to register',
        })
    }

    @Mutation(() => TokenResponse)
    public async login(
        @Args('login_dto', { type: () => LoginCredential })
        login_dto: LoginCredential,
    ): Promise<TokenResponse> {
        return this.loggerService.actionLog({
            callback: () => this.authorizationService.login(login_dto),
            action: 'Tried to login',
        })
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
            callback: () => this.authorizationService.logout(user.user_id, refresh_token),
            action: 'Tried to logout',
        })
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => InvitedUser)
    public async inviteUserToApp(
        @Args('email', { type: () => String })
        email: string,
        @CurrentUser()
        user: CurrentUserDto,
    ): Promise<InvitedUser> {
        return this.loggerService.actionLog({
            callback: () => this.authorizationService.inviteUserToApp(email),
            action: `Tried to invite user with email ${email}`,
            user_id: user.user_id,
        })
    }

    @Mutation(() => User)
    public async acceptInvite(
        @Args('accept_invite_dto', { type: () => AcceptInviteDto })
        accept_invite_dto: AcceptInviteDto,
    ): Promise<User> {
        return this.loggerService.actionLog({
            callback: () => this.authorizationService.acceptInviteToApp(accept_invite_dto),
            action: `Tried to accept invite, key: ${accept_invite_dto.key}`,
        })
    }
}
