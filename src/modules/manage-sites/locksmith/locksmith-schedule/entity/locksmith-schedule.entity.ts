import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Week } from '../enum/week.enum';
import { Locksmith } from '../../entity/locksmith.entity';

@ObjectType()
@Entity()
export class LocksmithSchedule extends BaseEntity {
  @Field(() => Week)
  @Column({ type: 'enum', enum: Week })
  name: Week;

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  open_at?: Date;

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  close_at?: Date;

  @Field(() => ID)
  @Column('uuid')
  locksmith_id?: string;

  @ManyToOne(() => Locksmith, (locksmith) => locksmith.schedules, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'locksmith_id' })
  locksmith: Locksmith;
}
