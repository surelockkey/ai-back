import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { ItemTemplate } from 'src/modules/car-inventory/item-template/entity/item-template.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class CarInventory extends BaseEntity {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => [ItemTemplate])
  @OneToMany(
    () => ItemTemplate,
    (item_template) => item_template.car_inventory,
    { eager: true },
  )
  item_templates: ItemTemplate[];
}
