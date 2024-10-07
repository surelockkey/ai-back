import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class Vacancy extends BaseEntity {
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  country?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  title?: string;
}
