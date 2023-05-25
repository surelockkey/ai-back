import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Entity, Column } from 'typeorm';
import { UserRole } from '../enum/user-role.enum';

@Entity('invited-user')
@ObjectType()
export class InvitedUser extends BaseEntity {
  @Column({ unique: true })
  @Field(() => String)
  email: string;

  @Field(() => String)
  @Column({ default: '' })
  name: string;

  @Column({ unique: true })
  @Field(() => String)
  key: string;

  @Column({ type: 'enum', enum: UserRole })
  @Field(() => UserRole)
  role: UserRole;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  workiz_id: string;
}
