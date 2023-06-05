import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class TimeTemplate extends BaseEntity {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  value: string;

  @Field(() => String)
  @Column()
  color: string;
}
