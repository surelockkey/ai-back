import { Injectable } from "@nestjs/common";
import { NestAuthService } from "@tech-slk/nest-auth";
import { User } from "../user/entity/user.entity";
import { UserService } from "../user/user.service";
import { CurrentUserDto } from "./dto/current-user.dto";
import { Token } from "./token/entity/token.entity";
import { TokenService } from "./token/token.service";
import { InvitedUser } from "../user/entity/invited-user.entity";
import { AcceptInviteDto } from "./dto/accept-invite.dto";
import { GraphQLError } from "graphql";
import { InvitedUserService } from "../user/invited-user.service";
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { LoggerService } from "../logger/logger.service";

@Injectable()
export class AuthorizationService extends NestAuthService<CurrentUserDto, Token, TokenService, User, UserService> {
    constructor(
        protected readonly userService: UserService,
        protected readonly invitedUserService: InvitedUserService,
        protected readonly tokenService: TokenService,
        protected readonly loggerService: LoggerService,
    ) {
        super(tokenService, userService);
    }

    public async inviteUserToApp(email: string): Promise<InvitedUser> {
        return await this.userService.findOne({ email })
            .then(() => {
                throw new GraphQLError('User with this email already exist');
            })
            .catch(() => {
                return this.invitedUserService.create({
                    email,
                    key: randomStringGenerator(),
                });
            });    
    }

    public async acceptInviteToApp({ key, ...rest }: AcceptInviteDto): Promise<User> {
        const { email, id } = await this.invitedUserService.findOne({ key });
        
        if (!email) throw new GraphQLError("User isn't invited");

        const new_user = await this.registration({
            email,
            ...rest,
        });

        this.loggerService.actionLog({
            callback: () => this.invitedUserService.deleteById(id),
            action: 'Tried to delete from invited list',
        })

        return new_user
    }
}