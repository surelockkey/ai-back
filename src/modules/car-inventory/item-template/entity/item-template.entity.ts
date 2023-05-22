import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CarInventory } from '../../entity/car-inventory.entity';

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
  @Column('uuid')
  car_inventory_id: string;

  @ManyToOne(
    () => CarInventory,
    (car_inventory) => car_inventory.item_templates,
  )
  @JoinColumn({ name: 'car_inventory_id' })
  car_inventory: CarInventory;
}
