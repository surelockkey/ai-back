import { Field, ObjectType } from "@nestjs/graphql";
import { UpdateCarRequest } from "../entity/update-car.entity";
import { ItemTemplate } from "../../item-template/entity/item-template.entity";

@ObjectType()
export class FindRequestsForUpdateCar extends UpdateCarRequest {
    @Field(() => ItemTemplate)
    item_template: ItemTemplate;
}