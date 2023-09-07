import { FindManyOptions } from 'typeorm';
import { Message } from '../entity/message.entity';
import { PaginatedMessages } from '../dto/paginated-message.dto';

export interface IChatService {
  sendMessage(prompt: string): Promise<Message>;
  findMany(options?: FindManyOptions<Message>): Promise<Message[]>;
  findManyPaginated(
    options?: FindManyOptions<Message>,
  ): Promise<PaginatedMessages>;
}
