import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@Entity('tech')
@ObjectType()
export class Tech extends BaseEntity {
  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => [String], { nullable: true })
  @Column('text', { array: true, nullable: true })
  service_areas?: string[];

  @Field(() => [String], { nullable: true })
  @Column('text', { array: true, nullable: true })
  skills?: string[];

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  workiz_id?: string;
}
