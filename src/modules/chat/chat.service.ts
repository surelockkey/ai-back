import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Message } from './entity/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { OpenAiService } from 'src/modules/open-ai/open-ai.service';
import { IChatService } from './factory/chat.interface';
import { ChatType } from './enum/chat-type.enum';

@Injectable()
export class ChatService extends CrudService<Message> implements IChatService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private readonly openAiService: OpenAiService,
  ) {
    super(messageRepository);
  }

  public async sendMessage(prompt: string) {
    const prev_messages = await this.findMany({
      order: { created: 'DESC' },
      take: 10,
    });

    const { id: openai_id, ...openai_response } =
      await this.openAiService.sendMessage(prompt, prev_messages.reverse());

    return await this.create({
      prompt,
      ...openai_response,
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
