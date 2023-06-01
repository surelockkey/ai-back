// import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PhotoForBlock } from './blog-photo.entity';
import { ConstructorBlog } from './constructor-blog.entity';

@ObjectType()
@Entity('blog_preview')
export class BlogPreview {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    title?: string;

    // @FilterableField()
    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    date?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    type_block?: string;

    @Field(() => PhotoForBlock, { nullable: true })
    @OneToOne(() => PhotoForBlock, (photo_for_block) => photo_for_block.blog_preview, {
        nullable: true,
        eager: true,
        cascade: true,
    })
    photo?: PhotoForBlock;

    @Field(() => ID, { nullable: true })
    @Column({ nullable: true })
    constructor_blog_id?: string;

    @OneToOne(() => ConstructorBlog, (constructor_blog) => constructor_blog.preview_info, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'constructor_blog_id' })
    constructor_blog: ConstructorBlog;
}
