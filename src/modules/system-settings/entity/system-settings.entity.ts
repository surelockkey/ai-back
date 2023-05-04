import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class SystemSettings extends BaseEntity {
  @Field(() => String)
  @Column()
  active_model: string;

  @Field(() => Int)
  @Column('int')
  max_tokens: number;
}
