import { WorkizContainerInfo } from "src/modules/api/workiz-api/dto/container.dto";
import { Field, ObjectType } from "@nestjs/graphql";
import { CarTemplate } from "../modules/car-template/entity/car-template.entity";
import { Template } from "../modules/template/entity/template.entity";

@ObjectType()
export class FindContainerAndTemplate {
    @Field(() => [WorkizContainerInfo])
    container: WorkizContainerInfo[];

    @Field(() => [Template])
    template: Template[];
}