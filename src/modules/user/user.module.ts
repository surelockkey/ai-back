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
import { UserScheduleModule } from './user-schedule/user-schedule.module';
import { UserNoteModule } from './user-note/user-note.module';
import { UserInfoModule } from './user-info/user-info.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([User, InvitedUser]),
    UserScheduleModule,
    UserNoteModule,
    UserInfoModule,
    WorkizApiModule,
  ],
  providers: [UserResolver, UserService, InvitedUserService],
  exports: [UserService, InvitedUserService],
})
export class UserModule {}
