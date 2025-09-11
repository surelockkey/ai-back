import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ConstructedPageCompany } from '../../constructed-page/constructed-page-company/entity/constructed-page-company.entity';

@ObjectType()
@Entity('page_metadata')
export class PageMetadata extends BaseEntity {
  @Field(() => String)
  @Column({ unique: true })
  key: string;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  canonical?: string;

  @Field(() => ID)
  @Column('uuid')
  constructed_page_company_id: string;

  @Field(() => ConstructedPageCompany)
  @ManyToOne(
    () => ConstructedPageCompany,
    (company) => company.constructed_pages,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true },
  )
  @JoinColumn({ name: 'constructed_page_company_id' })
  constructed_page_company: ConstructedPageCompany;
}
