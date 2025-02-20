// Oil Chang
// - Date
// - Next Date
// - Vehicle Picture
// - Receipt Picture

import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { File } from 'src/modules/file/entity/file.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Technician } from '../../entity/technician.entity';

@Entity('oil_change')
@ObjectType()
export class OilChange extends BaseEntity {
  @Field(() => Int)
  @Column('bigint')
  date: number;

  @Field(() => Int)
  @Column('bigint')
  next_date: number;

  @Field(() => ID, { nullable: true })
  @Column('uuid', { nullable: true })
  vehicle_picture_id?: string;

  @Field(() => ID, { nullable: true })
  @Column('uuid', { nullable: true })
  receipt_picture_id?: string;

  @Field(() => ID)
  @Column('uuid')
  technician_id: string;

  @Field(() => Int)
  @Column({ type: 'int' })
  mileage: number;

  @Field(() => File, { nullable: true })
  @OneToOne(() => File, (file) => file.oil_change_vehicle, {
    eager: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'vehicle_picture_id' })
  vehicle_picture?: File;

  @Field(() => File, { nullable: true })
  @OneToOne(() => File, (file) => file.oil_change_receipt, {
    eager: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'receipt_picture_id' })
  receipt_picture?: File;

  @Field(() => Technician)
  @ManyToOne(() => Technician, (technician) => technician.oil_changes, {
    eager: true,
  })
  @JoinColumn({ name: 'technician_id' })
  technician: Technician;
}
