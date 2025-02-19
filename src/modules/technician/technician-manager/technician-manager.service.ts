import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { TechnicianManager } from './entity/technician-manager.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TechnicianManagerService extends CrudService<TechnicianManager> {
  constructor(
    @InjectRepository(TechnicianManager)
    private readonly technicianManagerRepository: Repository<TechnicianManager>,
  ) {
    super(technicianManagerRepository);
  }
}
