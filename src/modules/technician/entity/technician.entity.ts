import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { OilChange } from '../oil-change/entity/oil-change.entity';
import { TechnicianManager } from '../technician-manager/entity/technician-manager.entity';

@Entity('technician')
@ObjectType()
export class Technician extends BaseEntity {
  @Field(() => String)
  @Column()
  first_name: string;

  @Field(() => String)
  @Column()
  last_name: string;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => ID, { nullable: true })
  @Column('uuid', { nullable: true })
  manager_id: string;

  @Field(() => String)
  @Column()
  license_plate: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  vin?: string;

  @Field(() => TechnicianManager, { nullable: true })
  @ManyToOne(
    () => TechnicianManager,
    (technician_manager) => technician_manager.technicians,
    { eager: true, onDelete: 'SET NULL', nullable: true },
  )
  @JoinColumn({ name: 'manager_id' })
  technician_manager?: TechnicianManager;

  @OneToMany(() => OilChange, (oil_change) => oil_change.technician)
  oil_changes: OilChange[];
}
