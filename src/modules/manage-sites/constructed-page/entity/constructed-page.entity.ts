import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { ConstructedPageType } from '../enum/constructed-page-type.enum';
import { ConstructedMetaInfo } from '../constructed-meta-info/entity/constructed-meta-info.entity';
import { ConstructedBlock } from '../constructed-block/entity/constructed-block.entity';

@ObjectType()
@Entity()
export class ConstructedPage extends BaseEntity {
  @Field(() => ConstructedPageType)
  @Column({ type: 'enum', enum: ConstructedPageType })
  type: ConstructedPageType;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  post_date?: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  post_date_future?: number;

  @Field(() => Boolean, { nullable: true })
  @Column({ type: 'boolean', nullable: true })
  is_posted?: boolean;

  @Field(() => ConstructedMetaInfo, { nullable: true })
  @OneToOne(
    () => ConstructedMetaInfo,
    (constructed_meta_info) => constructed_meta_info.constructed_page,
    { nullable: true, eager: true },
  )
  meta_info: ConstructedMetaInfo;

  @Field(() => [ConstructedBlock], { nullable: true })
  @OneToMany(
    () => ConstructedBlock,
    (constructed_block) => constructed_block.constructed_page,
    { nullable: true, eager: true },
  )
  blocks: ConstructedBlock[];
}
