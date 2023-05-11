import { Module } from '@nestjs/common';
import { TechInfoService } from './tech-info.service';
import { TechInfoResolver } from './tech-info.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechInfo } from './entity/tech-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TechInfo])],
  providers: [TechInfoService, TechInfoResolver],
})
export class TechInfoModule {}
