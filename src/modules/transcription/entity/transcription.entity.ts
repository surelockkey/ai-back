import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "@tech-slk/nest-crud";
import { Column, Entity } from "typeorm";

@ObjectType()
@Entity()
export class Transcription extends BaseEntity {
    @Field(() => String)
    @Column()
    text: string;

    @Field(() => String)
    @Column()
    ctm_call_id: string;
}