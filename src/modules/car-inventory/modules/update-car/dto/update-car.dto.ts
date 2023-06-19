import { Field, ID, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateUpdateCarDto {
    @Field(() => Int)
    requested_quantity: number;

    @Field(() => ID)
    item_template_id: string;
}

@InputType()
export class ApproveUpdateCarDto {
    @Field(() => ID)
    id: string;

    @Field(() => Int)
    approved_quantity: number;
}

@InputType()
export class SubmitUpdateCarDto {
    @Field(() => ID)
    id: string;

    @Field(() => Int)
    submitted_quantity: number;
}