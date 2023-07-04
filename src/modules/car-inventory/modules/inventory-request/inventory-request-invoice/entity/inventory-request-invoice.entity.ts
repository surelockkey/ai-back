import { Field, ID } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { InventoryRequest } from '../../entity/inventory-request.entity';
import { File } from 'src/modules/file/entity/file.entity';

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
    (inventory_request) => inventory_request.logist_items,
    {
      eager: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'inventory_request_id' })
  inventory_request: InventoryRequest;

  @OneToOne(() => File, (file) => file.inventory_request_invoice, {
    eager: true,
  })
  @JoinColumn({ name: 'file_id' })
  file: File;
}
