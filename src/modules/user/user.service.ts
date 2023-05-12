import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NestUserService } from '@tech-slk/nest-auth';

import { User } from './entity/user.entity';
import { In, Repository } from 'typeorm';
import { UserRole } from './enum/user-role.enum';

@Injectable()
export class UserService extends NestUserService<User> {
  constructor(
    @InjectRepository(User)
    protected readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  public async findAllUsers(current_user_id: string) {
    const { role: current_user_role } = await this.findOneById(current_user_id);

    console.log(current_user_role);

    return await this.findAll({
      role:
        current_user_role === UserRole.MAIN_DISPATCHER
          ? In([UserRole.MAIN_DISPATCHER, UserRole.DISPATCHER])
          : undefined,
    });
  }
}
