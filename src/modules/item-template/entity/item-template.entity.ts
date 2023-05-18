import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@Entity('item_template')
@ObjectType()
export class ItemTemplate extends BaseEntity {
  @Field(() => String)
  @Column()
  sku: string;

  @Field(() => String)
  @Column()
  uhs_sku: string;

  @Field(() => Int)
  @Column('int')
  quantity: number;
}
