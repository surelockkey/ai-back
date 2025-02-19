import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, OneToOne } from 'typeorm';
import { Key } from '../../customer-app/key/entity/key.entity';
import { InventoryRequestInvoice } from 'src/modules/car-inventory/modules/inventory-request/inventory-request-invoice/entity/inventory-request-invoice.entity';
import { ConstructedPhoto } from 'src/modules/manage-sites/constructed-page/constructed-photo/entity/constructed-photo.entity';
import { OilChange } from 'src/modules/technician/oil-change/entity/oil-change.entity';

@Entity('file')
@ObjectType()
export class File extends BaseEntity {
  @Field(() => String)
  @Column()
  format: string;

  @OneToOne(() => Key, (key) => key.photo, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  key: Key;

  @OneToOne(
    () => InventoryRequestInvoice,
    (inventory_request_invoice) => inventory_request_invoice.file,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  inventory_request_invoice: InventoryRequestInvoice;

  @OneToOne(
    () => ConstructedPhoto,
    (constructed_photo) => constructed_photo.file,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  constructed_photo: ConstructedPhoto;

  @OneToOne(() => OilChange, (oil_change) => oil_change.vehicle_picture, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  oil_change_vehicle: OilChange;

  @OneToOne(() => OilChange, (oil_change) => oil_change.receipt_picture, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  oil_change_receipt: OilChange;
}
