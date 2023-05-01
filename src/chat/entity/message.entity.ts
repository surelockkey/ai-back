import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@Entity('message')
@ObjectType()
export class Message extends BaseEntity {
  @Field(() => String)
  @Column()
  prompt: string;

  @Field(() => String)
  @Column()
  text: string;

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
}
