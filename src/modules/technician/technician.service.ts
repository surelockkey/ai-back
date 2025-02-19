import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Technician } from './entity/technician.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TechnicianService extends CrudService<Technician> {
  constructor(
    @InjectRepository(Technician)
    private readonly technicianRepository: Repository<Technician>,
  ) {
    super(technicianRepository);
  }
}
