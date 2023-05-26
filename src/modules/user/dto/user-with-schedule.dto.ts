import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../entity/user.entity';
import { UserSchedule } from '../user-schedule/entity/user-schedule.entity';

@ObjectType()
export class UserWithSchedule extends User {
  @Field(() => [UserSchedule])
  schedules: UserSchedule[];
}
