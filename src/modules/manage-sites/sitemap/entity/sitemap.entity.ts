import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { ConstructedPageCompany } from '../../constructed-page/constructed-page-company/entity/constructed-page-company.entity';
import { BaseEntity } from '@tech-slk/nest-crud';

@ObjectType()
@Entity('sitemap')
export class Sitemap extends BaseEntity {
  @Field()
  @Column()
  loc: string;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'bigint', nullable: true })
  lastmod: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'float', nullable: true })
  priority: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  changefreq: string;

  @Field(() => ConstructedPageCompany)
  @ManyToOne(() => ConstructedPageCompany, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'company_id' })
  company: ConstructedPageCompany;

  @Field()
  @Column({ name: 'company_id' })
  company_id: string;
}
