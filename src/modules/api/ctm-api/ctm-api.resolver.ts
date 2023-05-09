import { Args, Query, Resolver } from '@nestjs/graphql';
import { CtmApiService } from './ctm-api.service';
import { CtmGetCallsDto, CtmGetCallsOptionDto } from './dto/ctm-get-calls.dto';

@Resolver()
export class CtmApiResolver {
  constructor(private readonly ctmApiService: CtmApiService) {}


  @Query(() => CtmGetCallsDto)
  async getCalls(
    @Args('ctmGetCallsOptionDto', { type: () => CtmGetCallsOptionDto })
    ctmGetCallsOptionDto: CtmGetCallsOptionDto,
  ): Promise<CtmGetCallsDto> {
    return await this.ctmApiService.getCalls(ctmGetCallsOptionDto);
  }
}
