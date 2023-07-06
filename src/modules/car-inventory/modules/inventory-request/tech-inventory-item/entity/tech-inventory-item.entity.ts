import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { InventoryRequest } from '../../entity/inventory-request.entity';
import { InventoryRequestInvoice } from '../../inventory-request-invoice/entity/inventory-request-invoice.entity';

@ObjectType()
@Entity()
export class TechInventoryItem extends BaseEntity {
  @Field(() => String)
  @Column()
  sku: string;

  @Field(() => Int)
  @Column('int')
  qty: number;

  @Field(() => ID)
  @Column('uuid')
  inventory_request_id: string;

  @Field(() => ID)
  @Column('uuid')
  request_invoice_id: string;

  @ManyToOne(
    () => InventoryRequest,
    (inventory_request) => inventory_request.tech_items,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'inventory_request_id' })
  inventory_request: InventoryRequest;

  @ManyToOne(
    () => InventoryRequestInvoice,
    (inventory_request_invoice) => inventory_request_invoice.tech_items,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn({ name: 'request_invoice_id' })
  request_invoice: InventoryRequest;
}
