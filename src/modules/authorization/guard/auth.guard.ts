import { Injectable } from '@nestjs/common';
import { NestGqlAuthGuard } from '@tech-slk/nest-auth';
import { CurrentUserDto } from '../dto/current-user.dto';
import { Token } from '../token/entity/token.entity';
import { TokenService } from '../token/token.service';

@Injectable()
export class GqlAuthGuard extends NestGqlAuthGuard<CurrentUserDto, Token> {
  constructor(readonly tokenService: TokenService) {
    super(tokenService);
  }
}
