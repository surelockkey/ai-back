import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { In, Repository } from 'typeorm';
import { InvitedUser } from './entity/invited-user.entity';
import { CrudService } from '@tech-slk/nest-crud';
import { UserRole } from './enum/user-role.enum';
import { UserService } from './user.service';
import { GraphQLError } from 'graphql';

@Injectable()
export class InvitedUserService extends CrudService<InvitedUser> {
  constructor(
    @InjectRepository(InvitedUser)
    protected readonly invitedUserRepository: Repository<InvitedUser>,
    private readonly userService: UserService,
  ) {
    super(invitedUserRepository);
  }

  public async findAllInvitedUsers(user_role: UserRole) {
    return await this.findAll({
      role:
        user_role === UserRole.MAIN_DISPATCHER
          ? In([
              UserRole.MAIN_DISPATCHER,
              UserRole.DISPATCHER,
              UserRole.TECHNICIAN,
            ])
          : undefined,
    });
  }

  public async deleteManyInvitedUsers(
    user_ids: string[],
    current_user_id: string,
  ) {
    const { role: current_user_role } = await this.userService.findOneById(
      current_user_id,
    );

    const users = await this.userService.findAll({
      id: In(user_ids),
      role:
        current_user_role === UserRole.MAIN_DISPATCHER
          ? In([
              UserRole.MAIN_DISPATCHER,
              UserRole.DISPATCHER,
              UserRole.TECHNICIAN,
            ])
          : undefined,
    });

    if (users.length !== user_ids.length) {
      throw new GraphQLError('Invalid ids');
    }

    await this.invitedUserRepository.delete({
      id: In(user_ids),
    });

    return user_ids;
  }
}
