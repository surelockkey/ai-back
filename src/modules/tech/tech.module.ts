import { Module } from '@nestjs/common';
import { TechService } from './tech.service';
import { TechResolver } from './tech.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tech } from './entity/tech.entity';
import { WorkizApiModule } from '../api/workiz-api/workiz-api.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tech]), WorkizApiModule],
  providers: [TechService, TechResolver],
})
export class TechModule {}
