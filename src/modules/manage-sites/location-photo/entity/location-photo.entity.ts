import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('location_photo')
export class LocationPhoto {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  awsKey?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  awsUrl?: string;

  @Generated('increment')
  @Column({ nullable: false, select: false })
  _insertion_order: number;
}
