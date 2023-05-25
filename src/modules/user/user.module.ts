import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { InvitedUser } from './entity/invited-user.entity';
import { InvitedUserService } from './invited-user.service';
import { UserSchedule } from './user-schedule/entity/user-schedule.entity';
import { UserNote } from './user-note/entity/user-note.entity';
import { UserInfo } from './user-info/entity/user-info.entity';
import { WorkizApiModule } from '../api/workiz-api/workiz-api.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([User, InvitedUser]),
    UserSchedule,
    UserNote,
    UserInfo,
    WorkizApiModule,
  ],
  providers: [UserResolver, UserService, InvitedUserService],
  exports: [UserService, InvitedUserService],
})
export class UserModule {}
