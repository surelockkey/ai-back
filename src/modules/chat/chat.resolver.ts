import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Message } from './entity/message.entity';
import { LoggerService } from '../logger/logger.service';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from '../authorization/dto/current-user.dto';
import { RoleGuard } from '../authorization/decorator/role.decorator';
import { UserRole } from '../user/enum/user-role.enum';
import { ChatServiceFactory } from './factory/chat.factory.service';
import { ChatType } from './enum/chat-type.enum';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../authorization/guard/auth.guard';

@Resolver()
export class ChatResolver {
  constructor(
    private readonly chatFactoryService: ChatServiceFactory,
    private readonly loggerService: LoggerService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Message)
  sendMessage(
    @Args('prompt') prompt: string,
    @Args('chat_type', { type: () => ChatType, defaultValue: ChatType.DEFAULT })
    chat_type: ChatType,
    @CurrentUser()
    { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () =>
        this.chatFactoryService.getService(chat_type).sendMessage(prompt),
      action: `Tried to send message to chat: ${prompt}`,
      user_id,
    });
  }

  @RoleGuard(UserRole.ADMIN)
  @Query(() => [Message])
  getAllMessages(
    @Args('chat_type', { type: () => ChatType, defaultValue: ChatType.DEFAULT })
    chat_type: ChatType,
  ) {
    return this.chatFactoryService
      .getService(chat_type)
      .findMany({ order: { created: 'DESC' } });
  }
}
