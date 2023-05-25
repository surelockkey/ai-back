import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { NestUser } from '@tech-slk/nest-auth';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserRole } from '../enum/user-role.enum';
import { Log } from 'src/modules/logger/entity/log.entity';
import { UserSchedule } from 'src/modules/user/user-schedule/entity/user-schedule.entity';
import { UserInfo } from 'src/modules/user/user-info/entity/user-info.entity';
import { UserNote } from 'src/modules/user/user-note/entity/user-note.entity';

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

  // @Column({ unique: true })
  // @Field(() => String)
  // email: string;

  // @Column()
  // @Field(() => String)
  // password: string;

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

  @OneToMany(() => UserInfo, (user_info) => user_info.user)
  info: UserInfo[];

  @OneToMany(() => UserNote, (user_note) => user_note.user)
  notes: UserNote[];
}
