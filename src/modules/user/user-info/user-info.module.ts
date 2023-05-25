import { Module } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { UserInfoResolver } from './user-info.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfo } from './entity/user-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserInfo])],
  providers: [UserInfoService, UserInfoResolver],
})
export class UserInfoModule {}
