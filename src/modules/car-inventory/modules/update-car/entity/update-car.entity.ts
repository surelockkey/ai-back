import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "@tech-slk/nest-crud";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { ItemTemplate } from "../../item-template/entity/item-template.entity";

@Entity()
@ObjectType()
export class UpdateCarRequest extends BaseEntity {
    @Field(() => Int)
    @Column({ type: 'int' })
    requested_quantity: number;

    @Field(() => Int, { nullable: true })
    @Column({ type: 'int', nullable: true })
    approved_quantity: number;

    @Field(() => Int, { nullable: true })
    @Column({ type: 'int', nullable: true })
    submitted_quantity: number;

    @Field(() => Int)
    @Column({ type: 'bigint' })
    requested_at: number;

    @Field(() => Int, { nullable: true })
    @Column({ type: 'bigint', nullable: true })
    approved_at: number;

    @Field(() => Int, { nullable: true })
    @Column({ type: 'bigint', nullable: true })
    submitted_at: number;

    @Field(() => ID)
    @Column()
    item_template_id: string;

    @ManyToOne(() => ItemTemplate, (item_template) => item_template.requests, {
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'item_template_id' })
    item_template: ItemTemplate;
}