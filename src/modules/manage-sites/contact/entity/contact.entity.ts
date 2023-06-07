import { ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('contact')
export class Contact {
  //   @Field(() => ID)
  @ApiProperty({ type: () => String })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ type: () => String })
  @Column()
  phone_number: string;

  @ApiProperty({ type: () => String })
  @Column({ nullable: true })
  name?: string;

  @ApiProperty({ type: () => String })
  @Column({ nullable: true })
  email?: string;

  @ApiProperty({ type: () => String })
  @Column({ nullable: true })
  message?: string;

  @ApiProperty({ type: () => String })
  @Column({ type: 'boolean', nullable: true })
  callback?: boolean;

  @ApiProperty({ type: () => String })
  @Column({ nullable: true })
  ip?: string;

  @ApiProperty({ type: () => Date })
  @CreateDateColumn({ type: 'timestamptz' }) //TODO FINDOUT IF CHANGE TO UNIX
  date: Date;

  @ApiProperty({ type: () => String })
  @Column({ nullable: true })
  url?: string;

  @ApiProperty({ type: () => String })
  @Column({ nullable: true })
  state?: string;
}
