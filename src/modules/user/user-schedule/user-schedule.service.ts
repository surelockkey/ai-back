import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { UserSchedule } from './entity/user-schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateUserScheduleDto,
  UpdateUserScheduleDto,
} from './dto/user-schedule.dto';

@Injectable()
export class UserScheduleService extends CrudService<UserSchedule> {
  constructor(
    @InjectRepository(UserSchedule)
    private readonly userScheduleRepository: Repository<UserSchedule>,
  ) {
    super(userScheduleRepository);
  }

  public async createMany(user_schedules: CreateUserScheduleDto[]) {
    return this.userScheduleRepository.save(user_schedules);
  }

  public async updateManyUsersSchedules(
    users_schedules: UpdateUserScheduleDto[],
  ) {
    return await this.userScheduleRepository.save(users_schedules);
  }
}
