import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BlogBlock } from './blog-block.entity';
import { BlogMetaInfo } from './blog-meta-info.entity';
import { BlogPreview } from './blog-preview.entity';

@ObjectType()
@Entity('constructor_blog')
export class ConstructorBlog {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => Number, { nullable: true })
    @Column({ nullable: true })
    post_date?: number;

    @Field(() => Number, { nullable: true })
    @Column({ nullable: true })
    post_date_future?: number;

    @Field(() => Boolean, { nullable: true })
    @Column({ type: 'boolean', nullable: true })
    is_posted?: boolean;
    //=========

    @Field(() => BlogMetaInfo, { nullable: true })
    @OneToOne(() => BlogMetaInfo, (blog_meta_info) => blog_meta_info.constructor_blog, {
        nullable: true,
        cascade: true,
        eager: true,
    })
    metaInfo?: BlogMetaInfo;

    @Field(() => BlogPreview, { nullable: true })
    @OneToOne(() => BlogPreview, (blog_preview) => blog_preview.constructor_blog, {
        nullable: true,
        cascade: true,
        eager: true,
    })
    preview_info?: BlogPreview;

    @Field(() => [BlogBlock])
    @OneToMany(() => BlogBlock, (blog_block) => blog_block.constructor_blog, {
        nullable: true,
        eager: true,
        cascade: ['remove'],
    })
    blocks?: BlogBlock[];
}
