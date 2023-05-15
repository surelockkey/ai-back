import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Tech } from './entity/tech.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkizApiService } from '../api/workiz-api/workiz-api.service';
import * as moment from 'moment';

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

  public async getTechsWithSchedule(
    from: number,
    to: number,
    search_value?: string,
    is_available?: boolean,
    state?: string,
  ) {
    const queryBuilder = await this.techRepository
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
      );

    if (search_value) {
      queryBuilder.where('tech.name LIKE :search_value', {
        search_value: `%${search_value}%`,
      });
    }

    if (typeof is_available === 'boolean') {
      const date = moment().unix();

      if (is_available) {
        queryBuilder.andWhere(
          ':date BETWEEN tech-schedule.work_from AND tech-schedule.work_to',
          {
            date,
          },
        );
      } else {
        queryBuilder.andWhere(
          '(:date NOT BETWEEN tech-schedule.work_from AND tech-schedule.work_to OR tech-schedule.id IS NULL)',
          {
            date,
          },
        );
      }
    }

    if (state) {
      queryBuilder.andWhere('tech.state = :state', { state });
    }

    return await queryBuilder.orderBy('tech.name', 'ASC').getMany();
  }
}
