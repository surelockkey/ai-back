import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { User } from 'src/modules/user/entity/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('user-note')
@ObjectType()
export class UserNote extends BaseEntity {
  @Field(() => Int)
  @Column('int')
  week_start: number;

  @Field(() => Int)
  @Column('int')
  week_end: number;

  @Field(() => ID)
  @Column('uuid')
  user_id: string;

  @Field(() => String)
  @Column()
  note: string;

  @ManyToOne(() => User, (user) => user.notes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
