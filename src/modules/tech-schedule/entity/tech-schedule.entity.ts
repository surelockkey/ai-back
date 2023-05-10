import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@Entity('tech-schedule')
@ObjectType()
export class TechSchedule extends BaseEntity {
  @Field(() => String)
  @Column()
  tech_id: string;

  @Field(() => Int)
  @Column('int')
  work_from: number;

  @Field(() => Int)
  @Column('int')
  work_to: number;
}
