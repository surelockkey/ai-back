import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { LocksmithSchedule } from './entity/locksmith-schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import {
  LocksmithScheduleDto,
  UpdateLocksmithScheduleDto,
} from './dto/locksmith-schedule.dto';

@Injectable()
export class LocksmithScheduleService extends CrudService<LocksmithSchedule> {
  constructor(
    @InjectRepository(LocksmithSchedule)
    private readonly locksmithScheduleRepository: Repository<LocksmithSchedule>,
  ) {
    super(locksmithScheduleRepository);
  }

  public async saveManyScheduleTransactional(
    schedules: LocksmithScheduleDto[],
    locksmith_id: string,
    queryRunner: QueryRunner,
  ) {
    return await queryRunner.manager.save(
      LocksmithSchedule,
      schedules.map((schedule) => ({ ...schedule, locksmith_id })),
    );
  }

  public async updateManySchedulesTransactional(
    schedules: UpdateLocksmithScheduleDto[],
    queryRunner: QueryRunner,
  ) {
    return await queryRunner.manager.save(LocksmithSchedule, schedules);
  }
}
