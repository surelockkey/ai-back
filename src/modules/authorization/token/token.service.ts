import { Global, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NestTokenService } from "@tech-slk/nest-auth";
import { Token } from "./entity/token.entity";
import { Repository } from 'typeorm'
import { CurrentUserDto } from "../dto/current-user.dto";
import { ConfigService } from "@nestjs/config";
import { ConfigType } from "src/core/config/config";

@Global()
@Injectable()
export class TokenService extends NestTokenService<Token, CurrentUserDto> {

    constructor(
        @InjectRepository(Token)
        protected readonly tokenRepository: Repository<Token>,
        readonly configService: ConfigService,
    ) {
        const { key, access_expire, refresh_expire } = configService.get<ConfigType['jwt']>('jwt');
        super(tokenRepository, key, access_expire, refresh_expire);
    }
}