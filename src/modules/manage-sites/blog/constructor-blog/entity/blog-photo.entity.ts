import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BlogBlock } from './blog-block.entity';
import { BlogPreview } from './blog-preview.entity';

@ObjectType()
@Entity('photo_for_blog')
export class PhotoForBlock {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  link?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  alt?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  title?: string;

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  constructor_blog_id?: string;

  @OneToOne(() => BlogPreview, (blog_preview) => blog_preview.photo, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'constructor_blog_id' })
  blog_preview: BlogPreview;

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  blog_block_id?: string;

  @OneToOne(() => BlogBlock, (blog_block) => blog_block.photo, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'blog_block_id' })
  blog_block: BlogBlock;
}
