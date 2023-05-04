import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Message } from './entity/message.entity';
import { ChatService } from './chat.service';
import { GqlAuthGuard } from '../authorization/guard/auth.guard';
import { UseGuards } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from '../authorization/dto/current-user.dto';

@Resolver()
export class ChatResolver {
  constructor(
    private readonly chatService: ChatService,
    private readonly loggerService: LoggerService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Message)
  sendMessage(
    @Args('prompt') prompt: string,
    @CurrentUser()
    { user_id }: CurrentUserDto
  ) {
    return this.loggerService.actionLog({
      callback: () => this.chatService.sendMessage(prompt),
      action: `Tried to send message to chat: ${prompt}`,
      user_id,
    })
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Message])
  getAllMessages() {
    return this.chatService.findMany({ order: { created: 'DESC' } });
  }
}
