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
}
