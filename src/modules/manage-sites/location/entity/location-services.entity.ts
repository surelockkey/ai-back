import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Location } from './location.entity';

@ObjectType()
@Entity('location_services')
export class LocationServices {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Text_before?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  List?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Text_after?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  H2?: string;

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  our_service_id?: string;

  @OneToOne(() => Location, (location) => location.Our_services, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'our_service_id' })
  our_service?: string;

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  hour_24_service_id?: string;

  @OneToOne(() => Location, (location) => location.Hour_24_services, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'hour_24_service_id' })
  hour_24_service?: string;
}
