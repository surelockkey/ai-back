import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { UserScheduleRequest } from './entity/user-schedule-request.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserRole } from '../enum/user-role.enum';
import { GraphQLError } from 'graphql';
import { CreateUserScheduleRequestDto } from './dto/user-schedule-request.dto';

@Injectable()
export class UserScheduleRequestService extends CrudService<UserScheduleRequest> {
  constructor(
    @InjectRepository(UserScheduleRequest)
    private readonly userScheduleRequestRepository: Repository<UserScheduleRequest>,
  ) {
    super(userScheduleRequestRepository);
  }

  public async deleteUserScheduleRequest(
    id: string,
    user_role: UserRole,
    current_user_id: string,
  ) {
    let res: DeleteResult;
    if ([UserRole.ADMIN || UserRole.MAIN_DISPATCHER].includes(user_role)) {
      res = await this.userScheduleRequestRepository.delete({ id });
    } else {
      res = await this.userScheduleRequestRepository.delete({
        user_id: current_user_id,
        id,
      });
    }

    if (res.affected !== 1) {
      throw new GraphQLError('Failed to delete');
    }

    return id;
  }

  public createOrUpdateUserScheduleRequest(createUserScheduleRequestDto: CreateUserScheduleRequestDto[]): Promise<UserScheduleRequest[]> {
    return this.userScheduleRequestRepository.save(createUserScheduleRequestDto);
  }
}
