import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { TechNote } from './entity/tech-note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrUpdateTechNoteDto } from './dto/tech-note.dto';

@Injectable()
export class TechNoteService extends CrudService<TechNote> {
  constructor(
    @InjectRepository(TechNote)
    private readonly techNoteRepository: Repository<TechNote>,
  ) {
    super(techNoteRepository);
  }

  public async createOrUpdateTechNote(tech_note: CreateOrUpdateTechNoteDto) {
    return await this.techNoteRepository.save(tech_note);
  }
}
