import { Module } from '@nestjs/common';
import { UserNoteService } from './user-note.service';
import { UserNoteResolver } from './user-note.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserNote } from './entity/user-note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserNote])],
  providers: [UserNoteService, UserNoteResolver],
})
export class UserNoteModule {}
