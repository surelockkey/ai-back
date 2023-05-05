import { InputType, OmitType } from "@nestjs/graphql";
import { User } from "../entity/user.entity";

@InputType()
export class UserInput extends OmitType(User, ['logs']) {};