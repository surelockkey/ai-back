import { Field, ObjectType } from '@nestjs/graphql';
import { NestUser } from '@tech-slk/nest-auth';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { UserRole } from '../enum/user-role.enum';
import { Log } from 'src/modules/logger/entity/log.entity';
import { UserSchedule } from 'src/modules/user/user-schedule/entity/user-schedule.entity';
import { UserInfo } from 'src/modules/user/user-info/entity/user-info.entity';
import { UserNote } from 'src/modules/user/user-note/entity/user-note.entity';
import { UserCustomerInfo } from '../user-customer-info/entity/user-customer-info.entity';
import { Order } from 'src/modules/customer-app/order/entity/order.entity';
import { UserScheduleRequest } from '../user-schedule-request/entity/user-schedule-request.entity';
import { InventoryRequest } from 'src/modules/car-inventory/modules/inventory-request/entity/inventory-request.entity';

@Entity('user')
@ObjectType()
export class User extends NestUser {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  workiz_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  location?: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.ADMIN,
  })
  @Field(() => UserRole, { defaultValue: UserRole.ADMIN })
  role: UserRole;

  @Field(() => [Log])
  @OneToMany(() => Log, (log) => log.user, { eager: true })
  logs: Log[];

  @OneToMany(() => UserSchedule, (user_schedule) => user_schedule.user)
  schedules: UserSchedule[];

  @Field(() => [UserInfo], { nullable: true })
  @OneToMany(() => UserInfo, (user_info) => user_info.user, { eager: true })
  info: UserInfo[];

  @Field(() => [UserNote], { nullable: true })
  @OneToMany(() => UserNote, (user_note) => user_note.user, { eager: true })
  notes: UserNote[];

  @OneToMany(
    () => UserScheduleRequest,
    (user_schedule_request) => user_schedule_request.user,
  )
  schedule_requests: UserScheduleRequest[];

  @Field(() => UserCustomerInfo, { nullable: true })
  @OneToOne(
    () => UserCustomerInfo,
    (user_custom_info) => user_custom_info.user,
    { nullable: true, eager: true },
  )
  customer_info: UserCustomerInfo;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];

  @OneToMany(
    () => InventoryRequest,
    (inventory_request) => inventory_request.tech,
  )
  inventory_requests: InventoryRequest[];
}
