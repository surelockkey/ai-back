import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OpenAiService } from './open-ai.service';
import { OpenAiFile } from './dto/file.dto';
import { GqlAuthGuard } from '../authorization/guard/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class OpenAiResolver {
  constructor(private readonly openAiService: OpenAiService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => String)
  sendMessageToOpenAi(@Args('message') message: string) {
    return this.openAiService.sendMessage(message);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [OpenAiFile])
  getAllFiles() {
    return this.openAiService.getAllFiles();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => String)
  listFineTunes() {
    return this.openAiService.listFineTunes();
  }
}
