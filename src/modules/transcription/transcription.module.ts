import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transcription } from './entity/transcription.entity';
import { TranscriptionService } from './transcription.service';
import { OpenAiModule } from '../open-ai/open-ai.module';
import { TranscriptionResolver } from './transcription.resolver';
import { CtmApiModule } from '../api/ctm-api/ctm-api.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transcription]),
    OpenAiModule,
    CtmApiModule,
  ],
  providers: [TranscriptionService, TranscriptionResolver],
})
export class TranscriptionModule {}
