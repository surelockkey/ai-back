import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { UserScheduleRequest } from './entity/user-schedule-request.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserRole } from '../enum/user-role.enum';
import { GraphQLError } from 'graphql';
import { CreateOrUpdateUserScheduleRequestDto } from './dto/user-schedule-request.dto';

@Injectable()
export class UserScheduleRequestService extends CrudService<UserScheduleRequest> {
  constructor(
    @InjectRepository(UserScheduleRequest)
    private readonly userScheduleRequestRepository: Repository<UserScheduleRequest>,
  ) {
    super(userScheduleRequestRepository);
  }

  public async deleteManyUserScheduleRequest(
    ids: string[],
    user_role: UserRole,
    current_user_id: string,
  ) {
    let res: DeleteResult;
    if ([UserRole.ADMIN || UserRole.MAIN_DISPATCHER].includes(user_role)) {
      res = await this.deleteMany(ids);
    } else {
      res = await this.deleteMany(ids, current_user_id);
    }

    if (res.affected < 1) {
      throw new GraphQLError('Failed to delete');
    }

    return ids;
  }

  public createOrUpdateUserScheduleRequest(createOrUpdateUserScheduleRequestDto: CreateOrUpdateUserScheduleRequestDto[]): Promise<UserScheduleRequest[]> {
    return this.userScheduleRequestRepository.save(createOrUpdateUserScheduleRequestDto);
  }

  private deleteMany(ids: string[], user_id?: string) {
    return this.userScheduleRequestRepository.createQueryBuilder('user_schedule_request')
    .delete()
    .from(UserScheduleRequest)
    .where("id IN (:...ids)", { ids })
    .andWhere(user_id ? 'user_id = :user_id' : 'true', { ...(user_id && { user_id }) })
    .execute()
  }
}
