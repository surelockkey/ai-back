import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Message } from './entity/message.entity';
import { ChatService } from './chat.service';
import { GqlAuthGuard } from '../authorization/guard/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Message)
  sendMessage(@Args('prompt') prompt: string) {
    return this.chatService.sendMessage(prompt);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Message])
  getAllMessages() {
    return this.chatService.findMany({ order: { created: 'DESC' } });
  }
}
