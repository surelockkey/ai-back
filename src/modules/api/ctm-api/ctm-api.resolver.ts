import { Resolver, Query } from "@nestjs/graphql";
import { CtmApiService } from "./ctm-api.service";

@Resolver()
export class CtmApiResolver {
    constructor(
        private readonly ctmApiService: CtmApiService,
    ) { }

    // @Query(() => String)
    // testtwo() {
    //     this.ctmApiService.getCalls(1);
    //     return 'test'
    // }
}