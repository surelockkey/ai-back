import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { CarTemplate } from 'src/modules/car-inventory/modules/car-template/entity/car-template.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ItemTemplate } from '../../item-template/entity/item-template.entity';


@Entity('template')
@ObjectType()
export class Template extends BaseEntity {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => [ItemTemplate], { nullable: true })
  @OneToMany(() => ItemTemplate, (item_template) => item_template.template, { eager: true })
  items: ItemTemplate[];

  @Field(() => [CarTemplate], { nullable: true })
  @OneToMany(() => CarTemplate, (car_template) => car_template.template, { eager: true })
  car_templates: CarTemplate[];
}
