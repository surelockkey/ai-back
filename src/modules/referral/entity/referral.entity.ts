import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class Referral extends BaseEntity {
  @Field(() => String)
  @Column()
  first_name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  last_name: string;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  service_type: string;
}
