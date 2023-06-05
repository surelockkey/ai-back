import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../../entity/user.entity';

@Entity('user-schedule')
@ObjectType()
export class UserSchedule extends BaseEntity {
  @Field(() => ID)
  @Column('uuid')
  user_id: string;

  @Field(() => Int)
  @Column('int')
  work_from: number;

  @Field(() => Int)
  @Column('int')
  work_to: number;

  @ManyToOne(() => User, (user) => user.schedules, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
