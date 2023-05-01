import { Module } from '@nestjs/common';
import { FineTuneService } from './fine-tune.service';
import { FineTuneResolver } from './fine-tune.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FineTune } from './entity/fine-tune.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FineTune])],
  providers: [FineTuneService, FineTuneResolver],
})
export class FineTuneModule {}
