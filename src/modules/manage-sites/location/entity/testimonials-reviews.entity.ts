import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LocationTestimonials } from './location-testimonials.entity';

@ObjectType()
@Entity('testimonials_reviews')
export class TestimonialsReviews {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Name?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Type_of_service?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Review_text?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  Photo?: string;

  //=======
  @ManyToOne(
    () => LocationTestimonials,
    (testimonials) => testimonials.Reviews,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      orphanedRowAction: 'delete',
    },
  )
  testimonials: LocationTestimonials;
}
