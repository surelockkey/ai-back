import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Technician } from './entity/technician.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTechnicianDto } from './dto/technician.dto';

@Injectable()
export class TechnicianService extends CrudService<Technician> {
  constructor(
    @InjectRepository(Technician)
    private readonly technicianRepository: Repository<Technician>,
  ) {
    super(technicianRepository);
  }

  public async createTechnician(technician_dto: CreateTechnicianDto) {
    const technician = await this.create(technician_dto);

    return await this.findOneById(technician.id);
  }
}
