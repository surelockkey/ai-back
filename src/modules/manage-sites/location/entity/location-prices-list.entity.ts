import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LocationPrices } from './location-prices.entity';

@ObjectType()
@Entity('location_prices_list')
export class LocationPricesList {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  price: string;

  //=========
  @ManyToOne(() => LocationPrices, (location_prices) => location_prices.list, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  location_prices: LocationPrices;
}
