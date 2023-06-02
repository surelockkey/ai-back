import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LocationFormatsThumbnail } from './location-formats-thumbnail.entity';

@ObjectType()
// @InputType('LocationFormatsEntityInput')
@Entity('location_formats')
export class LocationFormats {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => LocationFormatsThumbnail, { nullable: true })
  @OneToOne(
    () => LocationFormatsThumbnail,
    (location_formats_thumbnail) => location_formats_thumbnail.location_format,
    {
      nullable: true,
      cascade: true,
      eager: true,
    },
  )
  thumbnail?: LocationFormatsThumbnail;

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  thubnail_id?: string;

  // @OneToOne(() => LocationThumbnail, location_thumbnail => location_thumbnail.formats, {
  //   onDelete: 'CASCADE',
  //   onUpdate: 'CASCADE',
  // })
  // @JoinColumn({ name: 'thubnail_id' })
  // location_thumbnail: LocationThumbnail;
}
