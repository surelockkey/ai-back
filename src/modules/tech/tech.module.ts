import { Module } from '@nestjs/common';
import { TechService } from './tech.service';
import { TechResolver } from './tech.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tech } from './entity/tech.entity';
import { WorkizApiModule } from '../api/workiz-api/workiz-api.module';
import { TechScheduleModule } from './tech-schedule/tech-schedule.module';
import { TechInfoModule } from './tech-info/tech-info.module';
import { TechNoteModule } from './tech-note/tech-note.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tech]),
    TechScheduleModule,
    TechInfoModule,
    TechNoteModule,
    WorkizApiModule,
  ],
  providers: [TechService, TechResolver],
})
export class TechModule {}
