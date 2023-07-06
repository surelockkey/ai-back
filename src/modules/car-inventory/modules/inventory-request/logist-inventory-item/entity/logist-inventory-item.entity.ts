import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { InventoryRequest } from '../../entity/inventory-request.entity';

@ObjectType()
@Entity()
export class LogistInventoryItem extends BaseEntity {
  @Field(() => String)
  @Column()
  sku: string;

  @Field(() => Int)
  @Column('int')
  qty: number;

  @Field(() => ID)
  @Column('uuid')
  inventory_request_id: string;

  @ManyToOne(
    () => InventoryRequest,
    (inventory_request) => inventory_request.logist_items,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'inventory_request_id' })
  inventory_request: InventoryRequest;
}
