import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LocksmithOld } from './locksmith.entity';
import { Request } from './request.entity';

@ObjectType()
@Entity('address')
export class Address {
  @ApiProperty({ type: () => String })
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ type: () => String })
  @Field(() => String)
  @Column()
  name: string;

  @Column({ nullable: true })
  locksmith_id?: string;

  @Column({ nullable: true })
  request_id?: string;

  @ManyToOne(() => Request, (request) => request.address, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'request_id' })
  request: Request;

  @ManyToOne(() => LocksmithOld, (locksmith) => locksmith.address, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'locksmith_id' })
  locksmith: LocksmithOld;
}
