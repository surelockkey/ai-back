import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ConstructedPageService } from './constructed-page.service';
import { ConstructedPage } from './entity/constructed-page.entity';
import { CreateConstructedPageDto } from './dto/constructed-page.dto';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { GetConstructedPagesArgs } from './args/get-constructed-pages.args';

@Resolver()
export class ConstructedPageResolver {
  constructor(
    private readonly constructedPageService: ConstructedPageService,
  ) {}

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Query(() => [ConstructedPage])
  getConstructedPages(@Args() args: GetConstructedPagesArgs) {
    return this.constructedPageService.findAll();
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Mutation(() => ConstructedPage)
  createConstructedPage(
    @Args('constructed_page', { type: () => CreateConstructedPageDto })
    constructed_page: CreateConstructedPageDto,
  ) {
    return this.constructedPageService.createConstructedPage(constructed_page);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Mutation(() => ID)
  deleteConstructedPageById(@Args('id', { type: () => ID }) id: string) {
    return this.constructedPageService.deleteByIdReturnId(id);
  }
}
