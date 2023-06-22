import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { UserScheduleRequest } from './entity/user-schedule-request.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserScheduleRequestService extends CrudService<UserScheduleRequest> {
  constructor(
    @InjectRepository(UserScheduleRequest)
    private readonly userScheduleRequestRepository: Repository<UserScheduleRequest>,
  ) {
    super(userScheduleRequestRepository);
  }
}
