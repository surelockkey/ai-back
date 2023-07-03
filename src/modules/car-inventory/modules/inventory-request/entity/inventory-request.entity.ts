import { Field } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Entity, OneToMany } from 'typeorm';
import { LogistInventoryItem } from '../logist-inventory-item/entity/logist-inventory-item.entity';

@Entity()
export class InventoryRequest extends BaseEntity {
  @Field(() => [LogistInventoryItem])
  @OneToMany(
    () => LogistInventoryItem,
    (logist_inventory_item) => logist_inventory_item.inventory_request,
  )
  logist_items: LogistInventoryItem[];
}
