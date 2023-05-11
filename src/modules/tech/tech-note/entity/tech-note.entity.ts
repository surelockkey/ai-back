import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Tech } from '../../entity/tech.entity';

@Entity('tech-note')
@ObjectType()
export class TechNote extends BaseEntity {
  @Field(() => Int)
  @Column('int')
  week_start: number;

  @Field(() => Int)
  @Column('int')
  week_end: number;

  @Field(() => ID)
  @Column('uuid')
  tech_id: string;

  @Field(() => String)
  @Column()
  note: string;

  @ManyToOne(() => Tech, (tech) => tech.notes)
  @JoinColumn({ name: 'tech_id' })
  tech: Tech;
}
