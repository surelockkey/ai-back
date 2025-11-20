import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import GraphQLJSON from 'graphql-type-json';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { ConstructedPage } from '../../entity/constructed-page.entity';

@ObjectType()
@Entity()
export class ConstructedMetaInfo extends BaseEntity {
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
  url?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  map_link?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  redirect_url?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  video_link?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  country?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  salary?: string;

  @Field(() => GraphQLJSON, { nullable: true, description: 'Auto-generated Schema.org JSON-LD for blog posts' })
  @Column('jsonb', { nullable: true })
  schema_org?: Record<string, any>;

  @Field(() => ID)
  @Column('uuid')
  constructed_page_id?: string;

  @Field(() => GraphQLJSON, { nullable: true, description: "Array<{name: string, url: string}>" })
  @Column('jsonb', { nullable: true })
  social_links?: Array<{
    name: string;
    url: string;
  }>;

  @OneToOne(
    () => ConstructedPage,
    (constructed_page) => constructed_page.meta_info,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn({ name: 'constructed_page_id' })
  constructed_page: ConstructedPage;
}
