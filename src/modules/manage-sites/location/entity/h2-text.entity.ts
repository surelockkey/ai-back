import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Location } from './location.entity';

@ObjectType('H2Text')
@Entity('h2_text')
export class H2Text {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  H2?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Text?: string;

  // @Field(() => ID)
  @Column({ nullable: true })
  about_us_id?: string;

  @OneToOne(() => Location, (location) => location.About_us, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'about_us_id' })
  location_about_us?: Location;

  // @Field(() => ID)
  @Column({ nullable: true })
  about_city_id?: string;

  @OneToOne(() => Location, (location) => location.About_city, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'about_city_id' })
  location_about_city?: Location;
}
