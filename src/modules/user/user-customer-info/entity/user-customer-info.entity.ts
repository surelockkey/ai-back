import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../../entity/user.entity';

@Entity()
@ObjectType()
export class UserCustomerInfo extends BaseEntity {
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  phone: string;

  @Field(() => ID)
  @Column('uuid')
  user_id: string;

  @OneToOne(() => User, (user) => user.customer_info)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
