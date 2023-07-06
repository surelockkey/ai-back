import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { InventoryRequest } from '../../entity/inventory-request.entity';
import { File } from 'src/modules/file/entity/file.entity';
import { TechInventoryItem } from '../../tech-inventory-item/entity/tech-inventory-item.entity';

@ObjectType()
@Entity()
export class InventoryRequestInvoice extends BaseEntity {
  @Field(() => ID)
  @Column('uuid')
  inventory_request_id: string;

  @Field(() => ID)
  @Column('uuid')
  file_id: string;

  @ManyToOne(
    () => InventoryRequest,
    (inventory_request) => inventory_request.request_invoices,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'inventory_request_id' })
  inventory_request: InventoryRequest;

  @Field(() => File)
  @OneToOne(() => File, (file) => file.inventory_request_invoice, {
    eager: true,
  })
  @JoinColumn({ name: 'file_id' })
  file: File;

  @Field(() => [TechInventoryItem])
  @OneToMany(
    () => TechInventoryItem,
    (tech_inventory_item) => tech_inventory_item.request_invoice,
    { eager: true },
  )
  tech_items: TechInventoryItem[];
}
