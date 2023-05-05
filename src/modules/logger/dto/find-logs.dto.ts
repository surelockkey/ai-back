import { Field, ObjectType } from "@nestjs/graphql";
import { Log } from "../entity/log.entity";
import { PaginateResult } from "src/core/dto/pagination.dto";
import { User } from "src/modules/user/entity/user.entity";

@ObjectType()
class LogWithUser extends Log {
    @Field(() => User, { nullable: true })
    user: User;
}

@ObjectType()
export class LogsPaginated extends PaginateResult(Log) {
    @Field(() => [LogWithUser])
    items: LogWithUser[];
}