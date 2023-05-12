import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { InvitedUser } from './entity/invited-user.entity';
import { InvitedUserService } from './invited-user.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, InvitedUser])],
  providers: [UserResolver, UserService, InvitedUserService],
  exports: [UserService, InvitedUserService],
})
export class UserModule {}
