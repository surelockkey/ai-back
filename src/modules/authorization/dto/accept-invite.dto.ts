import { Field, InputType, OmitType, PickType } from "@nestjs/graphql";
import { UserInput } from "src/modules/user/dto/user.input";

@InputType()
export class AcceptInviteDto extends PickType(UserInput, ['name', 'password'] as const) {
    @Field(() => String)
    key: string;
}
