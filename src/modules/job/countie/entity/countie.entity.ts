import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class Countie extends BaseEntity {
  @Field(() => String)
  @Column()
  state: string;

  @Field(() => String)
  @Column()
  city: string;

  @Field(() => String)
  @Column()
  county: string;
}
