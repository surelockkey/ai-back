import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthorizationResolver } from './authorization.resolver';
import { AuthorizationService } from './authorization.service';
import { TokenModule } from './token/token.module';
import { UserCustomerInfoModule } from '../user/user-customer-info/user-customer-info.module';

@Module({
  imports: [UserModule, TokenModule, UserCustomerInfoModule],
  providers: [AuthorizationResolver, AuthorizationService],
})
export class AuthorizationModule {}
