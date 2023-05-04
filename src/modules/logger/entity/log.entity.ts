import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';
import { LogType } from '../enum/type.enum';
import { LogGroup } from '../enum/group';

@Entity('log')
@ObjectType()
export class Log extends BaseEntity {
  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  user_id: string;

  @Field(() => String)
  @Column()
  action: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  message: string;

  @Field(() => LogType)
  @Column({
    type: 'enum',
    enum: LogType,
  })
  type: LogType;

  @Field(() => LogGroup)
  @Column({
    type: 'enum',
    enum: LogGroup,
    default: LogGroup.DEVELOPER
  })
  group: LogGroup;

  @Field(() => Int)
  @Column({ type: 'bigint' })
  created_at: number;
}