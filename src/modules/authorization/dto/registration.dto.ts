import { InputType, OmitType } from "@nestjs/graphql";
import { UserInput } from "src/modules/user/dto/user.input";

@InputType()
export class RegistrationDto extends OmitType(UserInput, ['id'] as const) {
}
