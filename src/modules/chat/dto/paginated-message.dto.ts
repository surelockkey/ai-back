import { ObjectType } from '@nestjs/graphql';
import { PaginateResult } from 'src/core/dto/pagination.dto';
import { Message } from '../entity/message.entity';

@ObjectType()
export class PaginatedMessages extends PaginateResult(Message) {}
