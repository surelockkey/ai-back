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
import { TestimonialsReviews } from './testimonials-reviews.entity';

@ObjectType()
@Entity('location_testimonials')
export class LocationTestimonials {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  H2?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Text_before?: string;

  @Field(() => [TestimonialsReviews], { nullable: true })
  @OneToMany(
    () => TestimonialsReviews,
    (testimonials_reviews) => testimonials_reviews.testimonials,
    {
      nullable: true,
      eager: true,
      cascade: ['remove', 'update'],
    },
  )
  Reviews?: TestimonialsReviews[];

  @Field(() => ID, { nullable: true })
  @Column({ nullable: true })
  location_id?: string;

  @OneToOne(() => Location, (location) => location.Testimonials, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'location_id' })
  location: Location;
}
