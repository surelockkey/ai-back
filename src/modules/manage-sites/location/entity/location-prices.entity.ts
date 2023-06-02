import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Location } from './location.entity';
import { LocationPricesList } from './location-prices-list.entity';

@ObjectType()
@Entity('location_prices')
export class LocationPrices {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  H2?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Text?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description_right: string;

  @Field(() => [LocationPricesList], { nullable: true })
  @OneToMany(
    () => LocationPricesList,
    (location_prices_list) => location_prices_list.location_prices,
    {
      nullable: true,
      eager: true,
      onDelete: 'CASCADE',
    },
  )
  list?: LocationPricesList[];

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  location_id?: string;

  @OneToOne(() => Location, (location) => location.Prices, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'location_id' })
  location?: Location;
}
