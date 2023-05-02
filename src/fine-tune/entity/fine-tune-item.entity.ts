import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@Entity('fine-tune-item')
@ObjectType()
export class FineTuneItem extends BaseEntity {
  @Field(() => String)
  @Column()
  prompt: string;

  @Field(() => String)
  @Column()
  text: string;

  @Field(() => Boolean)
  @Column('bool', { default: false })
  deleted: boolean;
}
