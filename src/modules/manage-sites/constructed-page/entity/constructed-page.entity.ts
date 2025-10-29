import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { ConstructedPageType } from '../enum/constructed-page-type.enum';
import { ConstructedMetaInfo } from '../constructed-meta-info/entity/constructed-meta-info.entity';
import { ConstructedBlock } from '../constructed-block/entity/constructed-block.entity';
import { ConstructedPreview } from '../constructed-preview/entity/constructed-preview.entity';
import { ConstructedPageCompany } from '../constructed-page-company/entity/constructed-page-company.entity';

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
  @Column({ type: 'bigint', nullable: true })
  schedule_date?: number;


  // select * from public.construted_page where constructed_page_company_id = '359be4f8-ee18-415f-b295-b89781b14065' and type = 'BLOG';

  // @Field(() => Number, { nullable: true })
  // @Column({ nullable: true })
  // post_date_future?: number;

  @Field(() => Boolean, { nullable: true })
  @Column({ type: 'boolean', nullable: true })
  is_posted?: boolean;

  @Field(() => ID, { nullable: true })
  @Column({ type: 'uuid', nullable: true })
  constructed_page_company_id?: string;

  @Field(() => ConstructedPageCompany, { nullable: true })
  @ManyToOne(
    () => ConstructedPageCompany,
    (constructed_page_company) => constructed_page_company.constructed_pages,
    { onDelete: 'SET NULL', onUpdate: 'SET NULL', eager: true },
  )
  @JoinColumn({ name: 'constructed_page_company_id' })
  constructed_page_company: ConstructedPageCompany;

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

  @Field(() => ConstructedPreview, { nullable: true })
  @OneToOne(
    () => ConstructedPreview,
    (constructed_preview) => constructed_preview.constructed_page,
    { nullable: true, eager: true },
  )
  preview: ConstructedPreview;
}
