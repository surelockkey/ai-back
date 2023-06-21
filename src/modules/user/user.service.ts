import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NestUserService } from '@tech-slk/nest-auth';

import { User } from './entity/user.entity';
import { FindOneOptions, In, Repository } from 'typeorm';
import { UserRole } from './enum/user-role.enum';
import { WorkizApiService } from '../api/workiz-api/workiz-api.service';
import * as moment from 'moment';
import { UpdateUserDto } from './dto/user.input';
import { GraphQLError } from 'graphql';

@Injectable()
export class UserService extends NestUserService<User> {
  constructor(
    @InjectRepository(User)
    protected readonly userRepository: Repository<User>,
    private readonly workizApiService: WorkizApiService,
  ) {
    super(userRepository);
  }

  public findOneUser(expression: FindOneOptions<User>): Promise<User> {
    return this.userRepository.findOne(expression);
  }

  public async getUsersWorkizWithoutAdded() {
    const workiz_users = await this.workizApiService.getAllTechWorkiz();
    const our_users = await this.userRepository.find();

    const our_users_workiz_ids = our_users.map((user) => user.workiz_id);

    return workiz_users.filter(
      (user) => !our_users_workiz_ids.includes(user.id),
    );
  }

  public async findAllUsers(current_user_id: string) {
    const { role: current_user_role } = await this.findOneById(current_user_id);

    return await this.findAll({
      role:
        current_user_role === UserRole.MAIN_DISPATCHER
          ? In([
              UserRole.MAIN_DISPATCHER,
              UserRole.DISPATCHER,
              UserRole.TECHNICIAN,
            ])
          : undefined,
    });
  }

  public async deleteManyUsers(user_ids: string[], current_user_id: string) {
    const { role: current_user_role } = await this.findOneById(current_user_id);

    await this.userRepository.delete({
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

    return user_ids;
  }

  public async updateUser(user_dto: UpdateUserDto, current_user_id: string) {
    const current_user = await this.findOneById(current_user_id);

    if (current_user.role === UserRole.MAIN_DISPATCHER) {
      const user_to_update = await this.findOneById(user_dto.id);

      if (
        ![
          UserRole.MAIN_DISPATCHER,
          UserRole.DISPATCHER,
          UserRole.TECHNICIAN,
        ].includes(user_to_update.role)
      ) {
        throw new GraphQLError(`You don't have permissions`);
      }
    }

    return await this.updateAndReturn(user_dto.id, user_dto);
  }

  public async getUsersWithSchedule(
    from: number,
    to: number,
    search_value?: string,
    is_available?: boolean,
    role?: UserRole[],
    locations?: string[],
  ) {
    const queryBuilder = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.info', 'user-info')
      .leftJoinAndSelect(
        'user.notes',
        'user-note',
        'user-note.week_start = :from AND user-note.week_end = :to',
      )
      .leftJoinAndSelect(
        'user.schedules',
        'user-schedule',
        'user-schedule.work_from BETWEEN :from AND :to OR user-schedule.work_to BETWEEN :from AND :to',
        {
          from,
          to,
        },
      );

    if (search_value) {
      queryBuilder.where('user.name LIKE :search_value', {
        search_value: `%${search_value}%`,
      });
    }

    if (role && role.length) {
      queryBuilder.andWhere('user.role IN (:...role)', { role });
    }

    if (locations && locations.length) {
      queryBuilder.andWhere('user.location IN (:...locations)', { locations });
    }

    if (typeof is_available === 'boolean') {
      const date = moment().unix();

      if (is_available) {
        queryBuilder.andWhere(
          ':date BETWEEN user-schedule.work_from AND user-schedule.work_to',
          {
            date,
          },
        );
      } else {
        queryBuilder.andWhere(
          '(:date NOT BETWEEN user-schedule.work_from AND user-schedule.work_to OR user-schedule.id IS NULL)',
          {
            date,
          },
        );
      }
    }

    return await queryBuilder.orderBy('user.name', 'ASC').getMany();
  }

  public async getUniqueLocations() {
    const res = await this.userRepository
      .createQueryBuilder('user')
      .select('user.location')
      .distinct(true)
      .getRawMany();

    return res
      .filter((loc) => loc.user_location)
      .map((loc) => loc.user_location);
  }
}
