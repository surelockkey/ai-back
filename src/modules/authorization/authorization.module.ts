import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthorizationResolver } from './authorization.resolver';
import { AuthorizationService } from './authorization.service';
import { TokenModule } from './token/token.module';

@Module({
    imports: [
        UserModule,
        TokenModule,
    ],
    providers: [AuthorizationResolver, AuthorizationService],
})
export class AuthorizationModule { }
