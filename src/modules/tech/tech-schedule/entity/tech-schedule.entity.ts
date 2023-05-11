import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Tech } from '../../entity/tech.entity';

@Entity('tech-schedule')
@ObjectType()
export class TechSchedule extends BaseEntity {
  @Field(() => ID)
  @Column('uuid')
  tech_id: string;

  @Field(() => Int)
  @Column('int')
  work_from: number;

  @Field(() => Int)
  @Column('int')
  work_to: number;

  @ManyToOne(() => Tech, (tech) => tech.schedules)
  @JoinColumn({ name: 'tech_id' })
  tech: Tech;
}
