import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';
import { ChatType } from '../enum/chat-type.enum';

@Entity('message')
@ObjectType()
export class Message extends BaseEntity {
  @Field(() => String)
  @Column()
  prompt: string;

  @Field(() => String)
  @Column()
  text: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  database_result?: string;

  @Field(() => Int)
  @Column('int')
  created: number;

  @Field(() => Int)
  @Column('int')
  total_tokens: number;

  @Field(() => String)
  @Column()
  finish_reason: string;

  @Field(() => String)
  @Column()
  openai_id: string;

  @Column({
    type: 'enum',
    enum: ChatType,
    default: ChatType.DEFAULT,
  })
  @Field(() => ChatType, { defaultValue: ChatType.DEFAULT })
  type: ChatType;
}
