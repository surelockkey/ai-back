import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';
import { ConstructedPageType } from '../enum/constructed-page-type.enum';

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
}
