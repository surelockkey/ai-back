import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';
import { Reviews } from './reviews.entity';
import { Schedule } from './schedule.entity';

@ObjectType()
@Entity('locksmith')
export class Locksmith {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => String)
  @Column()
  mail: string;

  @Field(() => String)
  @Column()
  link_to_site: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, unique: true })
  url?: string;

  @Field(() => String)
  @Column()
  link_to_map!: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  owners_name?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  owners_phone?: string;

  @Field(() => [String])
  @Column('character varying', { array: true })
  services: string[];

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  photo?: string;

  @Field(() => [String], { nullable: true })
  @Column('character varying', { array: true, default: '{}', nullable: true })
  zips: string[];

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => [Schedule])
  @OneToMany(() => Schedule, (schedule) => schedule.locksmith, { eager: true })
  schedule: Schedule[];

  @Field(() => [Address])
  @OneToMany(() => Address, (address) => address.locksmith, { eager: true })
  address: Address[];

  @Field(() => Number, { nullable: true })
  @Column({ type: 'int', nullable: true })
  priority?: number;

  @Field(() => [Reviews])
  @OneToMany(() => Reviews, (reviews) => reviews.locksmith)
  reviews: Reviews[];

  @Field(() => Boolean, { defaultValue: false })
  @Column({ type: 'boolean', default: false })
  is_verified?: boolean;
}
