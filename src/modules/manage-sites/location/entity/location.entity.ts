import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LocationPrices } from './location-prices.entity';
import { LocationTestimonials } from './location-testimonials.entity';
import { LocationThumbnail } from './location-thumbnail.entity';
import { H2Text } from './h2-text.entity';
import { LocationServices } from './location-services.entity';

@ObjectType()
@Entity('location')
export class Location {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Title?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Url?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Description?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  H1?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Subtitle?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Map_link?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Rich_template?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Phone_number?: string;

  @Field(() => Number, { nullable: true })
  @Column({ type: 'bigint', nullable: true }) //type: 'timestamptz'
  published_at?: number;

  @Field(() => Number)
  @CreateDateColumn({
    type: 'bigint',
    default: () => 'EXTRACT(EPOCH FROM NOW())',
  }) //{ type: 'timestamptz' } default: () => 'EXTRACT(EPOCH FROM NOW())'
  created_at: number;

  @Field(() => Number, { nullable: true })
  @Column({
    nullable: true,
    type: 'bigint',
    default: () => 'EXTRACT(EPOCH FROM NOW())',
  })
  updated_at?: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Name?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  State?: string;

  //=============
  @Field(() => H2Text, { nullable: true })
  @OneToOne(() => H2Text, (h2_text) => h2_text.location_about_us, {
    nullable: true,
    eager: true,
    onDelete: 'CASCADE',
    cascade: true,
  })
  About_us?: H2Text;

  //=============

  @Field(() => LocationPrices, { nullable: true })
  @OneToOne(
    () => LocationPrices,
    (location_prices) => location_prices.location,
    {
      nullable: true,
      cascade: true,
      eager: true,
    },
  )
  Prices?: LocationPrices;

  //=============

  @Field(() => LocationTestimonials, { nullable: true })
  @OneToOne(
    () => LocationTestimonials,
    (location_testimonials) => location_testimonials.location,
    {
      nullable: true,
      cascade: true,
      eager: true,
    },
  )
  Testimonials?: LocationTestimonials;

  //=============

  @Field(() => H2Text, { nullable: true })
  @OneToOne(() => H2Text, (h2_text) => h2_text.location_about_city, {
    nullable: true,
    eager: true,
    onDelete: 'CASCADE',
    cascade: true,
  })
  About_city?: H2Text;

  //=============

  @Field(() => LocationServices, { nullable: true })
  @OneToOne(
    () => LocationServices,
    (location_services) => location_services.our_service,
    {
      nullable: true,
      eager: true,
      cascade: true,
    },
  )
  Our_services?: LocationServices;

  //=============

  @Field(() => LocationServices, { nullable: true })
  @OneToOne(
    () => LocationServices,
    (location_services) => location_services.hour_24_service,
    {
      nullable: true,
      eager: true,
      cascade: true,
    },
  )
  Hour_24_services?: LocationServices;

  //=============
  @Field(() => LocationThumbnail, { nullable: true })
  @OneToOne(
    () => LocationThumbnail,
    (location_thumbnail) => location_thumbnail.location,
    {
      nullable: true,
      cascade: true,
      eager: true,
    },
  )
  Thumbnail?: LocationThumbnail;

  //=============

  @Field(() => LocationThumbnail, { nullable: true })
  @OneToOne(
    () => LocationThumbnail,
    (location_thumbnail) => location_thumbnail.location_photo,
    {
      nullable: true,
      cascade: true,
      eager: true,
    },
  )
  Photo?: LocationThumbnail;
}
