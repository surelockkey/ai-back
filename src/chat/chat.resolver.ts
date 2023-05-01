import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Message } from './entity/message.entity';
import { ChatService } from './chat.service';

@Resolver()
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  @Mutation(() => Message)
  sendMessage(@Args('prompt') prompt: string) {
    return this.chatService.sendMessage(prompt);
  }

  @Query(() => [Message])
  getAllMessages() {
    return this.chatService.findAll();
  }
}
