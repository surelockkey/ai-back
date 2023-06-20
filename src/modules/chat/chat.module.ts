import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatResolver } from './chat.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entity/message.entity';
import { OpenAiModule } from 'src/modules/open-ai/open-ai.module';
import { ChatServiceFactory } from './factory/chat.factory.service';
import { ApiChatService } from './api-chat.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), OpenAiModule],
  providers: [ChatServiceFactory, ChatService, ApiChatService, ChatResolver],
})
export class ChatModule {}
