import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../entity/user.entity';
import { UserSchedule } from '../user-schedule/entity/user-schedule.entity';
import { UserRole } from '../enum/user-role.enum';
import { UserScheduleRequest } from '../user-schedule-request/entity/user-schedule-request.entity';

@ObjectType()
export class UserWithSchedule extends User {
  @Field(() => [UserSchedule])
  schedules: UserSchedule[];

  @Field(() => [UserScheduleRequest])
  schedule_requests: UserScheduleRequest[];
}

@InputType()
export class UserWithScheduleDto {
  @Field(() => Int)
  from: number;

  @Field(() => Int)
  to: number;

  @Field(() => String, { nullable: true })
  search_value?: string;

  @Field(() => Boolean, { nullable: true })
  is_available?: boolean;

  @Field(() => [UserRole], { nullable: true })
  role?: UserRole[];

  @Field(() => [String], { nullable: true })
  locations?: string[];
}
