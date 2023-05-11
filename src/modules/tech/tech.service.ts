import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Tech } from './entity/tech.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkizApiService } from '../api/workiz-api/workiz-api.service';

@Injectable()
export class TechService extends CrudService<Tech> {
  constructor(
    @InjectRepository(Tech) private readonly techRepository: Repository<Tech>,
    private readonly workizApiService: WorkizApiService,
  ) {
    super(techRepository);
  }

  public async createTechFromWorkiz(workiz_id: string) {
    const all_workiz_techs = await this.workizApiService.getAllTechWorkiz();

    const { email, name, serviceAreas, skills } = all_workiz_techs.find(
      (tech) => tech.id === workiz_id,
    );

    return await this.techRepository.save({
      email,
      name,
      service_areas: serviceAreas,
      skills,
      workiz_id,
    });
  }

  public async getTechsWithSchedule(from: number, to: number) {
    return await this.techRepository
      .createQueryBuilder('tech')
      .leftJoinAndSelect('tech.info', 'tech-info')
      .leftJoinAndSelect(
        'tech.notes',
        'tech-note',
        'tech-note.week_start = :from AND tech-note.week_end = :to',
      )
      .leftJoinAndSelect(
        'tech.schedules',
        'tech-schedule',
        'tech-schedule.work_from BETWEEN :from AND :to OR tech-schedule.work_to BETWEEN :from AND :to',
        {
          from,
          to,
        },
      )
      .getMany();
  }
}
