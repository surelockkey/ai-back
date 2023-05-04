import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { NestUser } from "@tech-slk/nest-auth";
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRole } from "../enum/user-role.enum";

@Entity('user')
@ObjectType()
export class User extends NestUser {
    @Field(() => String)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    @Field(() => String)
    email: string;

    @Column()
    @Field(() => String)
    password: string

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.ADMIN
    })
    @Field(() => UserRole, { defaultValue: UserRole.ADMIN })
    role: UserRole;
}