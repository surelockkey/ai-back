import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { In, Repository } from 'typeorm';
import { InvitedUser } from './entity/invited-user.entity';
import { CrudService } from '@tech-slk/nest-crud';
import { UserRole } from './enum/user-role.enum';



@Injectable()
export class InvitedUserService extends CrudService<InvitedUser> {
  constructor(
    @InjectRepository(InvitedUser)
    protected readonly invitedUserRepository: Repository<InvitedUser>,
  ) {
    super(invitedUserRepository);
  }

  public async findAllInvitedUsers(current_user_id: string) {
    const { role: current_user_role } = await this.findOneById(current_user_id);

    return await this.findAll({
      role:
        current_user_role === UserRole.MAIN_DISPATCHER
          ? In([UserRole.MAIN_DISPATCHER, UserRole.DISPATCHER])
          : undefined,
    });
  }
}
