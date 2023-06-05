import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';
import { Schedule } from './schedule.entity';

@ObjectType()
@Entity('request')
export class Request {
  @ApiProperty({ type: () => String })
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ type: () => String })
  @Field(() => String)
  @Column()
  business_name: string;

  @ApiProperty({ type: () => String })
  @Field(() => String)
  @Column()
  business_phone: string;

  @ApiProperty({ type: () => String, required: false })
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  business_mail?: string;

  @ApiProperty({ type: () => String })
  @Field(() => String)
  @Column()
  link_to_site: string;

  @ApiProperty({ type: () => String })
  @Field(() => String)
  @Column()
  link_to_map: string;

  @ApiProperty({ type: () => String, required: false })
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  owners_name?: string;

  @ApiProperty({ type: () => [String] })
  @Field(() => [String])
  @Column('character varying', { default: '{}', array: true })
  services: string[];

  @ApiProperty({ type: () => String })
  @Field(() => String)
  @Column()
  owners_phone: string;

  @ApiProperty({ type: () => String, required: false })
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  photo?: string;

  @ApiProperty({ type: () => String, required: false })
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  files?: string;

  @ApiProperty({ type: () => String, required: false })
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description?: string;

  @ApiProperty({ type: () => [Schedule], isArray: true })
  @Field(() => [Schedule])
  @OneToMany(() => Schedule, (schedule) => schedule.request, {
    eager: true,
    cascade: true,
  })
  schedule: Schedule[];

  @ApiProperty({ type: () => [Address], isArray: true })
  @Field(() => [Address])
  @OneToMany(() => Address, (address) => address.request, {
    eager: true,
    cascade: true,
  })
  address: Address[];
}
