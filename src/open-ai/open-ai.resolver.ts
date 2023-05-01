import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OpenAiService } from './open-ai.service';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { FileUpload } from 'graphql-upload';
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

  @Mutation(() => OpenAiFile)
  uploadFileToOpenAi() {
    return this.openAiService.uploadFileToOpenAi();
  }

  @Query(() => [OpenAiFile])
  getAllFiles() {
    return this.openAiService.getAllFiles();
  }

  @Mutation(() => String)
  createFineTune(@Args('file_id') file_id: string) {
    return this.openAiService.createTune(file_id);
  }

  @Query(() => String)
  listFineTunes() {
    return this.openAiService.listFineTunes();
  }
}
