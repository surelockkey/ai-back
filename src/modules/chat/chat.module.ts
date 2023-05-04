import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatResolver } from './chat.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entity/message.entity';
import { OpenAiModule } from 'src/modules/open-ai/open-ai.module';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), OpenAiModule],
  providers: [ChatService, ChatResolver],
})
export class ChatModule {}
