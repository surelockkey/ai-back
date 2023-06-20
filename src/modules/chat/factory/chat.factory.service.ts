import { Injectable } from '@nestjs/common';
import { ChatService } from '../chat.service';
import { ApiChatService } from '../api-chat.service';
import { IChatService } from './chat.interface';
import { ChatType } from '../enum/chat-type.enum';

@Injectable()
export class ChatServiceFactory {
    constructor(
        private readonly chatService: ChatService,
        private readonly apiChatService: ApiChatService,
    ) {}

    public getService(context: ChatType): IChatService {
        switch(context) {
            case ChatType.DEFAULT: return this.chatService;
            case ChatType.WITH_API: return this.apiChatService;
            default: throw new Error(`No service defined for the context: "${context}"`);
        }
    }
}