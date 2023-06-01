import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OpenAiService } from './open-ai.service';
import { OpenAiFile } from './dto/file.dto';
import { GqlAuthGuard } from '../authorization/guard/auth.guard';
import { UseGuards } from '@nestjs/common';
import { RoleGuard } from '../authorization/decorator/role.decorator';
import { UserRole } from '../user/enum/user-role.enum';

@Resolver()
export class OpenAiResolver {
  constructor(private readonly openAiService: OpenAiService) {}

  @RoleGuard(UserRole.ADMIN)
  @Mutation(() => String)
  sendMessageToOpenAi(@Args('message') message: string) {
    return this.openAiService.sendMessage(message);
  }

  @RoleGuard(UserRole.ADMIN)
  @Query(() => [OpenAiFile])
  getAllFiles() {
    return this.openAiService.getAllFiles();
  }

  @RoleGuard(UserRole.ADMIN)
  @Query(() => String)
  listFineTunes() {
    return this.openAiService.listFineTunes();
  }

  // @RoleGuard(UserRole.ADMIN)
  @Query(() => String)
  listModels() {
    return this.openAiService.listModel();
  }

  @Query(() => String)
  sendSqlMessage(@Args('message') message: string) {
    return this.openAiService.sendSqlMessage(message);
  }
}
