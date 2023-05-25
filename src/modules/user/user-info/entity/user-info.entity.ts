import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { User } from 'src/modules/user/entity/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('user-info')
@ObjectType()
export class UserInfo extends BaseEntity {
  @Field(() => ID)
  @Column('uuid')
  user_id: string;

  @Field(() => String)
  @Column()
  key: string;

  @Field(() => String)
  @Column()
  value: string;

  @ManyToOne(() => User, (user) => user.info, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
