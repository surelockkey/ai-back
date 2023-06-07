import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { LocationFormats } from './location-formats.entity';
import { Location } from './location.entity';

@ObjectType()
@Entity('location_thumbnail')
export class LocationThumbnail {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  url?: string;

  @Field(() => Number)
  @CreateDateColumn({
    type: 'bigint',
    default: () => 'EXTRACT(EPOCH FROM NOW())',
    nullable: true,
  }) // type: 'timestamptz'
  created_at: number;

  @Field(() => Number)
  @Column({
    nullable: true,
    type: 'bigint',
    default: () => 'EXTRACT(EPOCH FROM NOW())',
  })
  updated_at?: number;

  //=============
  @Field(() => ID)
  @Column({ nullable: true })
  location_thubnail_id?: string;

  @OneToOne(() => Location, (location) => location.Thumbnail, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'location_thubnail_id' })
  location: Location;

  //=============
  @Field(() => ID)
  @Column({ nullable: true })
  location_photo_id?: string;

  @OneToOne(() => Location, (location) => location.Photo, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'location_photo_id' })
  location_photo: Location;
}
