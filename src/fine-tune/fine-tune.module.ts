import { Module } from '@nestjs/common';
import { FineTuneService } from './fine-tune.service';
import { FineTuneResolver } from './fine-tune.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FineTuneItem } from './entity/fine-tune-item.entity';
import { FineTune } from './entity/fine-tune.entity';
import { OpenAiModule } from 'src/open-ai/open-ai.module';

@Module({
  imports: [TypeOrmModule.forFeature([FineTune, FineTuneItem]), OpenAiModule],
  providers: [FineTuneService, FineTuneResolver],
})
export class FineTuneModule {}
