import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NestUserService } from '@tech-slk/nest-auth';

import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends NestUserService<User> {
  constructor(
    @InjectRepository(User)
    protected readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }
}
