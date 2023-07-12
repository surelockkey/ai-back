import { Module } from '@nestjs/common';
import { LocksmithService } from './locksmith.service';
import { LocksmithResolver } from './locksmith.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locksmith } from './entity/locksmith.entity';
import { LocksmithScheduleModule } from './locksmith-schedule/locksmith-schedule.module';
import { LocksmithReviewModule } from './locksmith-review/locksmith-review.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Locksmith]),
    LocksmithScheduleModule,
    LocksmithReviewModule,
  ],
  providers: [LocksmithService, LocksmithResolver],
})
export class LocksmithModule {}
