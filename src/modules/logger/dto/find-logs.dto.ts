import { ObjectType } from "@nestjs/graphql";
import { Log } from "../entity/log.entity";
import { PaginateResult } from "src/core/dto/pagination.dto";

@ObjectType()
export class LogsPaginated extends PaginateResult(Log) {}