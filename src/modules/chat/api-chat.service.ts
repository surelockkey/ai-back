import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Message } from './entity/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { OpenAiService } from 'src/modules/open-ai/open-ai.service';
import { IChatService } from './factory/chat.interface';
import { ChatType } from './enum/chat-type.enum';

@Injectable()
export class ApiChatService
  extends CrudService<Message>
  implements IChatService
{
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private readonly openAiService: OpenAiService,
  ) {
    super(messageRepository);
  }

  public async sendMessage(prompt: string) {
    const { id: openai_id, ...openai_response } =
      await this.openAiService.sendSqlMessage(prompt);

    return await this.create({
      prompt,
      ...openai_response,
      type: ChatType.WITH_API,
      openai_id,
    });
  }

  public async findMany(options?: FindManyOptions<Message>) {
    return this.messageRepository.find({
      ...options,
    });
  }

  public async findManyPaginated(options?: FindManyOptions<Message>) {
    const [items, total] = await this.messageRepository.findAndCount({
      ...options,
    });

    return {
      items,
      total,
    };
  }
}
