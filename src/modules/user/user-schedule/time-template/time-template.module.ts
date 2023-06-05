import { Module } from '@nestjs/common';
import { TimeTemplateService } from './time-template.service';
import { TimeTemplateResolver } from './time-template.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeTemplate } from './entity/time-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TimeTemplate])],
  providers: [TimeTemplateService, TimeTemplateResolver],
})
export class TimeTemplateModule {}
