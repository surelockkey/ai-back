import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class WorkizContainer {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string

    @Field(() => String)
    description: string;

    @Field(() => String)
    is_primary: string;

    @Field(() => String)
    total_items: string;

    @Field(() => String)
    total_unique_items: string;

    @Field(() => String)
    total_net_value: string;

    @Field(() => String)
    total_value: string;

    @Field(() => String)
    isLowStock: string;
}

@ObjectType()
export class WorkizContainerInfo {
    @Field(() => String)
    item_name: string;

    @Field(() => String)
    long_desc: string;

    @Field(() => String)
    price: string;

    @Field(() => String)
    cost: string;

    @Field(() => ID)
    item_id: string;

    @Field(() => String, { nullable: true })
    id: string;

    @Field(() => String)
    qty: string;

    @Field(() => String)
    minimum_at_location: string;

    @Field(() => String, { nullable: true })
    total_unique_items: string;

    @Field(() => String, { nullable: true })
    total_items: string;
}