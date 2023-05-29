import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Template } from '../../template/entity/template.entity';

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

  @Field(() => ID)
  @Column()
  template_id: string;

  @ManyToOne(() => Template, (template) => template.items, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'template_id' })
  template: string;
}
