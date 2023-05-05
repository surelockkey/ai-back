import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { NestUser } from "@tech-slk/nest-auth";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserRole } from "../enum/user-role.enum";
import { Log } from "src/modules/logger/entity/log.entity";

@Entity('user')
@ObjectType()
export class User extends NestUser {
    @Field(() => String)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => String)
    @Column()
    name: string;

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

    @Field(() => [Log])
    @OneToMany(() => Log, (log) => log.user, { eager: true })
    logs: Log[];
}