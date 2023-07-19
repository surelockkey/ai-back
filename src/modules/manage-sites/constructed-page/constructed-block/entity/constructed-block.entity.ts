import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class ConstructedBlock extends BaseEntity {
  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  position_block?: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  headline?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  text_left?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  text_right?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  list?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  text?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  last_text?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  last_list?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  styles?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  first_list?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  type_block?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  body_text?: string;

  @Field(() => ID)
  @Column()
  constructed_page_id: string;

  // TODO: Add photo
  //   photo?: PhotoForBlock;
}
