import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class FineTune extends BaseEntity {
  @Field(() => String)
  @Column()
  openai_id: string;

  @Field(() => Int)
  @Column('int')
  created_at: number;

  @Field(() => String)
  @Column()
  openai_file_id: string;

  @Field(() => String)
  @Column()
  model: string;
}
