import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, OneToMany } from 'typeorm';
import { LocksmithSchedule } from '../locksmith-schedule/entity/locksmith-schedule.entity';
import { LocksmithReview } from '../locksmith-review/entity/locksmith-review.entity';

@ObjectType()
@Entity()
export class Locksmith extends BaseEntity {
  @Field(() => Boolean, { nullable: true })
  @Column('boolean', { default: false })
  confirmed?: boolean;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => String)
  @Column()
  mail: string;

  @Field(() => String)
  @Column()
  link_to_site: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, unique: true })
  url?: string;

  @Field(() => String)
  @Column()
  link_to_map!: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  owner_name?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  owner_phone?: string;

  @Field(() => [String])
  @Column('character varying', { array: true })
  services: string[];

  @Field(() => ID, { nullable: true })
  @Column('uuid', { nullable: true })
  file_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  file_url: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => [String])
  @Column('character varying', { array: true })
  address: string[];

  @Field(() => Number, { nullable: true })
  @Column({ type: 'int', nullable: true })
  priority?: number;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ type: 'boolean', default: false })
  is_verified?: boolean;

  @Field(() => [LocksmithSchedule])
  @OneToMany(
    () => LocksmithSchedule,
    (locksmith_schedule) => locksmith_schedule.locksmith,
    { eager: true },
  )
  schedules: LocksmithSchedule[];

  @Field(() => [LocksmithReview])
  @OneToMany(() => LocksmithReview, (reviews) => reviews.locksmith, {
    eager: true,
  })
  reviews: LocksmithReview[];
}
