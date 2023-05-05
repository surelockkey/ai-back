import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "@tech-slk/nest-crud";
import { Entity, Column } from 'typeorm';

@Entity('invited-user')
@ObjectType()
export class InvitedUser extends BaseEntity {
    @Column({ unique: true })
    @Field(() => String)
    email: string;

   @Column({ unique: true })
   @Field(() => String)
   key: string;
}