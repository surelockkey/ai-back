import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Message } from './entity/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpenAiService } from 'src/open-ai/open-ai.service';

@Injectable()
export class ChatService extends CrudService<Message> {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private readonly openAiService: OpenAiService,
  ) {
    super(messageRepository);
  }

  public async sendMessage(prompt: string) {
    const { id: openai_id, ...openai_response } =
      await this.openAiService.sendMessage(prompt);

    return await this.create({
      prompt,
      ...openai_response,
      openai_id,
    });
  }
}
