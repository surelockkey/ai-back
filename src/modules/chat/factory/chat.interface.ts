import { FindManyOptions } from "typeorm";
import { Message } from "../entity/message.entity";

export interface IChatService {
    sendMessage(prompt: string): Promise<Message>;
    findMany(options?: FindManyOptions<Message>): Promise<Message[]>;
}