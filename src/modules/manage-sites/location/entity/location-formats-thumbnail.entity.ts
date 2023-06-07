import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LocationFormats } from './location-formats.entity';

@ObjectType()
// @InputType('LocationFormatsThumbnailEntityInput')
@Entity('location_formats_thumbnail')
export class LocationFormatsThumbnail {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  ext?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  url?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  hash?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  mime?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  path?: string;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  size?: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  width?: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  height?: number;

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  location_formats_id?: string;

  @OneToOne(
    () => LocationFormats,
    (location_formats) => location_formats.thumbnail,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'location_formats_id' })
  location_format: LocationFormats;
}
