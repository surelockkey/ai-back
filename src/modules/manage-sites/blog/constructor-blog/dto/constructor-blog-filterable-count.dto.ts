import { Field, ObjectType } from '@nestjs/graphql';
import { ConstructorBlog } from '../entity/constructor-blog.entity';

@ObjectType()
export class ConstructorBlogFilterableWithCountDto {
  @Field(() => [ConstructorBlog], { nullable: true })
  blog?: ConstructorBlog[];

  @Field(() => Number, { nullable: true })
  blogCount?: number;
}
