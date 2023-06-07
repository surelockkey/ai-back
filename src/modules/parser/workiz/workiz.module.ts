import { Module } from '@nestjs/common';
import { WorkizService } from './workiz.service';

@Module({
  providers: [WorkizService],
  exports: [WorkizService],
})
export class WorkizModule {}
