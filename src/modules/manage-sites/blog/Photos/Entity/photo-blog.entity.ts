import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('photo_blog')
export class PhotoBlog {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    awsKey?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    awsUrl?: string;

    //TODO! FINDD OUT IF IT FIELD NEEDED?
    @Field(() => [String], { nullable: true })
    @Column('text', { array: true, nullable: true, default: [] })
    blogsLink: string[];

    @Generated('increment')
    @Column({ nullable: false, select: false })
    _insertion_order: number;
}
