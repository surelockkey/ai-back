import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { LogistInventoryItem } from '../logist-inventory-item/entity/logist-inventory-item.entity';
import { TechInventoryItem } from '../tech-inventory-item/entity/tech-inventory-item.entity';
import { InventoryRequestInvoice } from '../inventory-request-invoice/entity/inventory-request-invoice.entity';
import { InventoryRequestStatus } from '../enum/inventory-request-status.enum';
import { User } from 'src/modules/user/entity/user.entity';

@ObjectType()
@Entity()
export class InventoryRequest extends BaseEntity {
  @Field(() => InventoryRequestStatus)
  @Column({ type: 'enum', enum: InventoryRequestStatus })
  status: InventoryRequestStatus;

  @Field(() => ID)
  @Column('uuid')
  tech_id: string;

  @Field(() => Number)
  @CreateDateColumn({
    type: 'bigint',
    default: () => 'EXTRACT(EPOCH FROM NOW())::bigint',
  })
  created_at: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.inventory_requests, {
    eager: true,
    onDelete: 'NO ACTION',
  })
  @JoinColumn({ name: 'tech_id' })
  tech: User;

  @Field(() => [LogistInventoryItem])
  @OneToMany(
    () => LogistInventoryItem,
    (logist_inventory_item) => logist_inventory_item.inventory_request,
    { eager: true },
  )
  logist_items: LogistInventoryItem[];

  @OneToMany(
    () => TechInventoryItem,
    (tech_inventory_item) => tech_inventory_item.inventory_request,
  )
  tech_items: TechInventoryItem[];

  @Field(() => [InventoryRequestInvoice])
  @OneToMany(
    () => InventoryRequestInvoice,
    (inventory_request_invoice) => inventory_request_invoice.inventory_request,
    { eager: true },
  )
  request_invoices: InventoryRequestInvoice[];
}
