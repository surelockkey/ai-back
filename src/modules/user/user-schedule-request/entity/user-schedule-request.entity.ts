import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { User } from '../../entity/user.entity';

@Entity()
@ObjectType()
export class UserScheduleRequest extends BaseEntity {
  @Field(() => Int)
  @Column('int')
  work_from: number;

  @Field(() => Int)
  @Column('int')
  work_to: number;

  @Field(() => ID)
  @Column()
  user_id: string;

  @ManyToOne(() => User, (user) => user.schedule_requests)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
