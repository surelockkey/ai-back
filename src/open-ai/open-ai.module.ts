import { Module } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { OpenAiResolver } from './open-ai.resolver';

@Module({
  providers: [OpenAiService, OpenAiResolver],
})
export class OpenAiModule {}
