import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Call } from './entity/call.entity';
import { CallResolver } from './call.resolver';
import { CallService } from './call.service';
import { WorkizApiModule } from 'src/modules/api/workiz-api/workiz-api.module';
import { OpenAiModule } from 'src/modules/open-ai/open-ai.module';
import { CallTranscriptionService } from './call-trascription.service';

@Module({
  imports: [TypeOrmModule.forFeature([Call]), WorkizApiModule, OpenAiModule],
  providers: [CallResolver, CallService, CallTranscriptionService],
  exports: [CallService],
})
export class CallModule {}
