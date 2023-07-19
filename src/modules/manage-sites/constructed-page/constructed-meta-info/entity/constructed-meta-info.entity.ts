import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
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
  url_for_blog?: string;

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  constructed_page_id?: string;

  @OneToOne(
    () => ConstructedPage,
    (constructed_page) => constructed_page.meta_info,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn({ name: 'constructed_page_id' })
  constructed_page: ConstructedPage;
}
