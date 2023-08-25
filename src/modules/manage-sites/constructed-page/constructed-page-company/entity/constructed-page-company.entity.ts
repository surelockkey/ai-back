import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, OneToMany } from 'typeorm';
import { ConstructedPage } from '../../entity/constructed-page.entity';

@Entity()
@ObjectType()
export class ConstructedPageCompany extends BaseEntity {
  @Field(() => String)
  @Column()
  name: string;

  @OneToMany(
    () => ConstructedPage,
    (constructed_page) => constructed_page.constructed_page_company,
  )
  constructed_pages: ConstructedPage[];
}
