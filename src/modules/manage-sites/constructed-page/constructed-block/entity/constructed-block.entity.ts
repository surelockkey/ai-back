import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { ConstructedPage } from '../../entity/constructed-page.entity';
import { ConstructedPhoto } from '../../constructed-photo/entity/constructed-photo.entity';

@ObjectType()
@Entity()
export class ConstructedBlock extends BaseEntity {
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

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  state?: string;

  @Field(() => ID)
  @Column('uuid')
  constructed_page_id: string;

  @ManyToOne(
    () => ConstructedPage,
    (constructed_page) => constructed_page.blocks,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn({ name: 'constructed_page_id' })
  constructed_page: ConstructedPage;

  @Field(() => ID, { nullable: true })
  @Column({ type: 'uuid', nullable: true })
  constructed_photo_id: string;

  @Field(() => ConstructedPhoto, { nullable: true })
  @OneToOne(
    () => ConstructedPhoto,
    (constructed_photo) => constructed_photo.block,
    { nullable: true, eager: true },
  )
  @JoinColumn({ name: 'constructed_photo_id' })
  photo: ConstructedPhoto;
}
