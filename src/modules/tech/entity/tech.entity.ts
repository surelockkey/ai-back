import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, OneToMany } from 'typeorm';
import { TechSchedule } from '../tech-schedule/entity/tech-schedule.entity';
import { TechInfo } from '../tech-info/entity/tech-info.entity';

@Entity('tech')
@ObjectType()
export class Tech extends BaseEntity {
  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => [String], { nullable: true })
  @Column('text', { array: true, nullable: true })
  service_areas?: string[];

  @Field(() => [String], { nullable: true })
  @Column('text', { array: true, nullable: true })
  skills?: string[];

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  workiz_id?: string;

  @OneToMany(() => TechSchedule, (tech_schedule) => tech_schedule.tech)
  schedules: TechSchedule[];

  @Field(() => [TechInfo])
  @OneToMany(() => TechInfo, (tech_info) => tech_info.tech, { eager: true })
  info: TechInfo[];
}
