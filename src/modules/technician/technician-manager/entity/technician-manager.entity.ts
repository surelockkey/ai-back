import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, OneToMany } from 'typeorm';
import { Technician } from '../../entity/technician.entity';

@Entity('technician_manager')
@ObjectType()
export class TechnicianManager extends BaseEntity {
  @Field(() => String)
  @Column()
  first_name: string;

  @Field(() => String)
  @Column()
  last_name: string;

  @Field(() => String)
  @Column()
  phone: string;

  @OneToMany(() => Technician, (oil_change) => oil_change.technician_manager)
  technicians: Technician[];
}
