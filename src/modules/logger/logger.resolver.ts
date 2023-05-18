import { Args, Query, Resolver } from '@nestjs/graphql';
import { LoggerService } from './logger.service';
import { FindPaginationDto } from 'src/core/dto/pagination.dto';
import { LogsPaginated } from './dto/find-logs.dto';
import { RoleGuard } from '../authorization/decorator/role.decorator';
import { UserRole } from '../user/enum/user-role.enum';

@Resolver()
export class LoggerResolver {
  constructor(private readonly loggerService: LoggerService) {}

  @RoleGuard(UserRole.ADMIN)
  @Query(() => LogsPaginated)
  public async getLogs(
    @Args('pagination', { type: () => FindPaginationDto })
    pagination: FindPaginationDto,
  ): Promise<LogsPaginated> {
    return this.loggerService.find(pagination);
  }
}
