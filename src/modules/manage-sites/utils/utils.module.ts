import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilsService } from './utils.service';
import { IsExistValidator } from '../../../core/validator/is-exist-validator';

@Module({
  imports: [TypeOrmModule.forFeature()],
  providers: [UtilsService, IsExistValidator],
  exports: [UtilsService],
})
export class UtilsModule {}
