import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OpenAiService } from './open-ai.service';
import { OpenAiFile } from './dto/file.dto';

@Resolver()
export class OpenAiResolver {
  constructor(private readonly openAiService: OpenAiService) {}

  @Query(() => String)
  getHello() {
    return 'Hello';
  }

  @Mutation(() => String)
  sendMessageToOpenAi(@Args('message') message: string) {
    return this.openAiService.sendMessage(message);
  }

  @Query(() => [OpenAiFile])
  getAllFiles() {
    return this.openAiService.getAllFiles();
  }

  @Query(() => String)
  getFullLastFineTune() {}

  @Query(() => String)
  listFineTunes() {
    return this.openAiService.listFineTunes();
  }
}
