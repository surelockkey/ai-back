import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocksmithService } from './locksmith.service';
import { Locksmith } from './entity/locksmith.entity';
import {
  CreateLocksmithDto,
  RequestLocksmithDto,
  UpdateLocksmithDto,
} from './dto/locksmith.dto';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { FindPaginationDto } from 'src/core/dto/pagination.dto';
import { PaginatedLocksmith } from './dto/paginated-locksmith.dto';

@Resolver()
export class LocksmithResolver {
  constructor(private readonly locksmithService: LocksmithService) {}

  @Mutation(() => Locksmith)
  requestLocksmith(
    @Args('locksmith', { type: () => RequestLocksmithDto })
    locksmith: RequestLocksmithDto,
  ) {
    return this.locksmithService.createLocksmith(locksmith);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Mutation(() => Locksmith)
  createLocksmith(
    @Args('locksmith', { type: () => CreateLocksmithDto })
    locksmith: CreateLocksmithDto,
  ) {
    return this.locksmithService.createLocksmith(locksmith);
  }

  @Query(() => PaginatedLocksmith)
  getLocksmiths(
    @Args('pagination', { type: () => FindPaginationDto })
    pagination: FindPaginationDto,
    @Args('confirmed', { type: () => Boolean }) confirmed: boolean,
    @Args('search_value', { nullable: true }) search_value?: string,
  ): Promise<PaginatedLocksmith> {
    return this.locksmithService.getLocksmiths(
      pagination,
      confirmed,
      search_value,
    );
  }

  @Query(() => Locksmith)
  getLocksmithById(@Args('id', { type: () => ID }) id: string) {
    return this.locksmithService.findOneById(id);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Mutation(() => Locksmith)
  updateLocksmith(
    @Args('locksmith', { type: () => UpdateLocksmithDto })
    locksmith: UpdateLocksmithDto,
  ) {
    return this.locksmithService.updateLocksmith(locksmith);
  }
}
