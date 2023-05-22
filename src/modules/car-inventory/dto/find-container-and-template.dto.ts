import { WorkizContainerInfo } from "src/modules/api/workiz-api/dto/container.dto";
import { ItemTemplate } from "../item-template/entity/item-template.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FindContainerAndTemplate {
    @Field(() => [WorkizContainerInfo])
    container: WorkizContainerInfo[];

    @Field(() => [ItemTemplate])
    template: ItemTemplate[];
}