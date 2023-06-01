import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ConstructorBlog } from './constructor-blog.entity';

@ObjectType()
@Entity('blog_meta_info')
export class BlogMetaInfo {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  meta_tag_description?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  meta_tag_title?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  schema_script?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  global_script?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  date_when_will_post_blog?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  categoric?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  url_for_blog?: string;

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  constructor_blog_id?: string;

  @OneToOne(
    () => ConstructorBlog,
    (constructor_blog) => constructor_blog.metaInfo,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'constructor_blog_id' })
  constructor_blog: ConstructorBlog;
}
