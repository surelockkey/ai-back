import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, OneToMany } from 'typeorm';
import { ConstructedPage } from '../../entity/constructed-page.entity';
import { GraphQLJSON } from 'graphql-type-json';

@Entity()
@ObjectType()
export class ConstructedPageCompany extends BaseEntity {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  blog_base_url: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  location_base_url: string;

  @Field(() => [String], { nullable: true })
  @Column('text', { array: true, nullable: true })
  webhook_urls: string[];

  @Field(() => GraphQLJSON, { nullable: true })
  @Column('jsonb', { nullable: true })
  redirects: JSON;

  @OneToMany(
    () => ConstructedPage,
    (constructed_page) => constructed_page.constructed_page_company,
  )
  constructed_pages: ConstructedPage[];
}
