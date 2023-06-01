import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PhotoForBlock } from './blog-photo.entity';
import { ConstructorBlog } from './constructor-blog.entity';

@ObjectType()
@Entity('blog_block')
export class BlogBlock {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  //=====
  @OneToOne(
    () => PhotoForBlock,
    (photo_for_block) => photo_for_block.blog_block,
    {
      nullable: true,
      cascade: true,
      eager: true,
    },
  )
  @Field(() => PhotoForBlock, { nullable: true })
  photo?: PhotoForBlock;

  //==========

  // @Field(() => ConstructorBlog)
  @ManyToOne(
    () => ConstructorBlog,
    (constructor_blog) => constructor_blog.blocks,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      orphanedRowAction: 'delete',
    },
  )
  constructor_blog: ConstructorBlog;
}
