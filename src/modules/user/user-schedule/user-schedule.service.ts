import { Injectable } from "@nestjs/common";
import { CrudService } from "@tech-slk/nest-crud";
import { UserSchedule } from "./entity/user-schedule.entity";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, In, Repository } from "typeorm";
import {
  CreateOrUpdateUserScheduleDto,
  CreateUserScheduleDto,
  UpdateUserScheduleDto,
} from "./dto/user-schedule.dto";
import { UserScheduleRequestService } from "../user-schedule-request/user-schedule-request.service";
import { GraphQLError } from "graphql";
import { UserScheduleRequestStatus } from "../user-schedule-request/enum/user-schedule-request-status.enum";
import { UserScheduleRequest } from "../user-schedule-request/entity/user-schedule-request.entity";

@Injectable()
export class UserScheduleService extends CrudService<UserSchedule> {
  constructor(
    @InjectRepository(UserSchedule)
    private readonly userScheduleRepository: Repository<UserSchedule>,
    private readonly userScheduleRequestService: UserScheduleRequestService,
    @InjectDataSource() private readonly dataSource: DataSource
  ) {
    super(userScheduleRepository);
  }

  public async approveUserScheduleRequest(request_ids: string[]): Promise<UserSchedule[]> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();

    try {
      const find_requests = await this.userScheduleRequestService.findAll({
        id: In(request_ids),
      })
  
      if (find_requests.length !== request_ids.length) {
        throw new GraphQLError('Some of ids are incorrect');
      }

      await queryRunner.manager.save(UserScheduleRequest, find_requests.map((request)=> ({
        ...request,
        status: UserScheduleRequestStatus.APPROVED,
      })));
  
      const approved_schedule = queryRunner.manager.save(UserSchedule, find_requests.map(({ work_from, work_to, user_id }) => ({
        user_id,
        work_from,
        work_to,
      })));
  
      await queryRunner.commitTransaction();
      return approved_schedule;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }

  public async declineUserScheduleRequest(request_ids: string[]): Promise<UserScheduleRequest[]> {
    const find_requests = await this.userScheduleRequestService.findAll({
      id: In(request_ids),
    })

    if (find_requests.length !== request_ids.length) {
      throw new GraphQLError('Some of ids are incorrect');
    }

    return await this.userScheduleRequestService.createOrUpdateUserScheduleRequest(find_requests.map((request)=> ({
      ...request,
      status: UserScheduleRequestStatus.DECLINED,
    })));
  }

  public async createMany(user_schedules: CreateUserScheduleDto[]) {
    return this.userScheduleRepository.save(user_schedules);
  }

  public async updateManyUsersSchedules(
    users_schedules: UpdateUserScheduleDto[]
  ) {
    return await this.userScheduleRepository.save(users_schedules);
  }

  public async createOrUpdateManyUsersSchedules(
    users_schedules: CreateOrUpdateUserScheduleDto[]
  ) {
    return await this.userScheduleRepository.save(users_schedules);
  }
}
