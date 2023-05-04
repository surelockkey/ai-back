import { UseGuards } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { LoggerService } from "./logger.service";
import { GqlAuthGuard } from "../authorization/guard/auth.guard";
import { FindPaginationDto } from "src/core/dto/pagination.dto";
import { LogsPaginated } from "./dto/find-logs.dto";

@Resolver()
export class LoggerResolver {
    constructor(
        private readonly loggerService: LoggerService,
    ) { }

    @UseGuards(GqlAuthGuard)
    @Query(() => LogsPaginated)
    public async getLogs(
        @Args('pagination', { type: () => FindPaginationDto })
        pagination: FindPaginationDto
    ): Promise<LogsPaginated> {
        return this.loggerService.find(pagination);
    }
}
