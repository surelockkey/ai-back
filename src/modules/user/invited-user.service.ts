import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { InvitedUser } from './entity/invited-user.entity';
import { CrudService } from '@tech-slk/nest-crud';



@Injectable()
export class InvitedUserService extends CrudService<InvitedUser> {
  constructor(
    @InjectRepository(InvitedUser)
    protected readonly invitedUserRepository: Repository<InvitedUser>,
  ) {
    super(invitedUserRepository);
  }
}
