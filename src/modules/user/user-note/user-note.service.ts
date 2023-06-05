import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { UserNote } from './entity/user-note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrUpdateUserNoteDto } from './dto/user-note.dto';

@Injectable()
export class UserNoteService extends CrudService<UserNote> {
  constructor(
    @InjectRepository(UserNote)
    private readonly userNoteRepository: Repository<UserNote>,
  ) {
    super(userNoteRepository);
  }

  public async createOrUpdateUserNote(user_note: CreateOrUpdateUserNoteDto) {
    return await this.userNoteRepository.save(user_note);
  }
}
