import { Injectable } from "@nestjs/common";
import { NestAuthService } from "@tech-slk/nest-auth";
import { User } from "../user/entity/user.entity";
import { UserService } from "../user/user.service";
import { CurrentUserDto } from "./dto/current-user.dto";
import { Token } from "./token/entity/token.entity";
import { TokenService } from "./token/token.service";

@Injectable()
export class AuthorizationService extends NestAuthService<CurrentUserDto, Token, TokenService, User, UserService> {
    constructor(
        protected readonly userService: UserService,
        protected readonly tokenService: TokenService,
    ) {
        super(tokenService, userService);
    }
}