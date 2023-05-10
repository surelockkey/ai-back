import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { TechSchedule } from './entity/tech-schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateTechScheduleDto,
  UpdateTechScheduleDto,
} from './dto/tech-schedule.dto';

@Injectable()
export class TechScheduleService extends CrudService<TechSchedule> {
  constructor(
    @InjectRepository(TechSchedule)
    private readonly techScheduleRepository: Repository<TechSchedule>,
  ) {
    super(techScheduleRepository);
  }

  public async createMany(techs_schedules: CreateTechScheduleDto[]) {
    return this.techScheduleRepository.save(techs_schedules);
  }

  public async updateManyTechsSchedules(
    techs_schedules: UpdateTechScheduleDto[],
  ) {
    return await this.techScheduleRepository.save(techs_schedules);
  }
}
