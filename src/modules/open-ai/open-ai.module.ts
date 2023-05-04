import { Module } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { OpenAiResolver } from './open-ai.resolver';
import { SystemSettingsModule } from 'src/modules/system-settings/system-settings.module';

@Module({
  imports: [SystemSettingsModule],
  providers: [OpenAiService, OpenAiResolver],
  exports: [OpenAiService],
})
export class OpenAiModule {}
