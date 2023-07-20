import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { ConstructedPage } from '../../entity/constructed-page.entity';
import { ConstructedPhoto } from '../../constructed-photo/entity/constructed-photo.entity';

@Entity()
@ObjectType()
export class ConstructedPreview extends BaseEntity {
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  date?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  type_block?: string;

  @Field(() => ID)
  @Column('uuid')
  constructed_page_id: string;

  @Field(() => ID, { nullable: true })
  @Column({ type: 'uuid', nullable: true })
  constructed_photo_id: string;

  @OneToOne(
    () => ConstructedPage,
    (constructed_page) => constructed_page.preview,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn({ name: 'constructed_page_id' })
  constructed_page: ConstructedPage;

  @Field(() => ConstructedPhoto, { nullable: true })
  @OneToOne(
    () => ConstructedPhoto,
    (constructed_photo) => constructed_photo.preview,
    { nullable: true, eager: true },
  )
  @JoinColumn({ name: 'constructed_photo_id' })
  photo: ConstructedPhoto;
}
