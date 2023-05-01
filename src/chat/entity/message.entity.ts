import { ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Entity } from 'typeorm';

@Entity('message')
@ObjectType()
export class Message extends BaseEntity {}
