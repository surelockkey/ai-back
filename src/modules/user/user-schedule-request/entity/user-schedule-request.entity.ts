import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { User } from '../../entity/user.entity';

@Entity()
@ObjectType()
@Unique('unique_user_schedule_request_for_day', ['user_id', 'day'])
export class UserScheduleRequest extends BaseEntity {
  @Field(() => Int)
  @Column('int')
  from: number;

  @Field(() => Int)
  @Column('int')
  to: number;

  @Field(() => ID)
  @Column('uuid')
  user_id: string;

  @Field(() => String)
  @Column()
  day: string;

  @ManyToOne(() => User, (user) => user.schedule_requests)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
