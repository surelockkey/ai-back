import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ConstructedPageService } from './constructed-page.service';
import { ConstructedPage } from './entity/constructed-page.entity';
import {
  CreateConstructedPageDto,
  UpdateConstructedPageDto,
} from './dto/constructed-page.dto';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { GetConstructedPagesArgs } from './args/get-constructed-pages.args';
import { SendDto } from '@tech-slk/nest-crud';
import { ConstructedPageParserService } from './constructed-page-parser.service';
import { ConstructedPageParserLocationService } from './constructed-page-parser-location.service';
import { GraphQLJSON } from 'graphql-type-json';
import { Location } from '../location/entity/location.entity';
import { ConstructorBlog } from '../blog/constructor-blog/entity/constructor-blog.entity';

@Resolver()
export class ConstructedPageResolver {
  constructor(
    private readonly constructedPageService: ConstructedPageService,
    private readonly constructedPageParserService: ConstructedPageParserService,
    private readonly constructedPageParserLocationService: ConstructedPageParserLocationService,
  ) {}

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Query(() => [ConstructedPage])
  getConstructedPages(@Args() args: GetConstructedPagesArgs) {
    return this.constructedPageService.getConstructedPages(args);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Query(() => ConstructedPage)
  getConstructedPageById(@Args('id', { type: () => ID }) id: string) {
    return this.constructedPageService.getConstructedPageById(id);
  }

  // @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Query(() => ConstructedPage)
  getConstructedPageByUrl(@Args('url') url: string) {
    return this.constructedPageService.getConstructedPageByUrl(url);
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

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Mutation(() => ConstructedPage)
  updateConstructedPage(
    @Args('constructed_page', { type: () => UpdateConstructedPageDto })
    constructed_page: UpdateConstructedPageDto,
  ) {
    return this.constructedPageService.updateConstructedPage(constructed_page);
  }

  @Mutation(() => SendDto)
  parseBlogs(
    @Args('constructed_page_company_id') constructed_page_company_id: string,
  ) {
    return this.constructedPageParserService.parseBlogs(
      constructed_page_company_id,
    );
  }

  @Mutation(() => SendDto)
  parseLocation(
    @Args('constructed_page_company_id') constructed_page_company_id: string,
  ) {
    return this.constructedPageParserLocationService.parseAllLocation(
      constructed_page_company_id,
    );
  }

  @Mutation(() => SendDto)
  transformAllLocation(
    @Args('locations', { type: () => GraphQLJSON }) locations: Location[],
    @Args('constructed_page_company_id') constructed_page_company_id: string,
  ) {
    return this.constructedPageParserLocationService.transformAllLocation(
      locations,
      constructed_page_company_id,
    );
  }

  @Mutation(() => SendDto)
  transformBlogs(
    @Args('blogs', { type: () => GraphQLJSON }) blogs: ConstructorBlog[],
    @Args('constructed_page_company_id') constructed_page_company_id: string,
  ) {
    return this.constructedPageParserService.transformBlogs(
      blogs,
      constructed_page_company_id,
    );
  }
}
