import { Module } from '@nestjs/common';
import { TechNoteService } from './tech-note.service';
import { TechNoteResolver } from './tech-note.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechNote } from './entity/tech-note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TechNote])],
  providers: [TechNoteService, TechNoteResolver],
})
export class TechNoteModule {}
