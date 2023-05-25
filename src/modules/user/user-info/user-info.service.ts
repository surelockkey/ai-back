import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { UserInfo } from './entity/user-info.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrUpdateUserInfoDto } from './dto/user-info.dto';

@Injectable()
export class UserInfoService extends CrudService<UserInfo> {
  constructor(
    @InjectRepository(UserInfo)
    private readonly userInfoRepository: Repository<UserInfo>,
  ) {
    super(userInfoRepository);
  }

  public async createOrUpdateUserInfo(user_infos: CreateOrUpdateUserInfoDto) {
    return this.userInfoRepository.save(user_infos);
  }
}
