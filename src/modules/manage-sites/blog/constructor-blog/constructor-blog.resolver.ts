import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ConstructorBlogService } from './constructor-blog.service';
import { ChangeBlogPostStatusDto } from './dto/change-blog-post-status.dto';
import { FilterableBlogDto } from './dto/filterable-blog.dto';
import { ConstructorBlogFilterableWithCountDto } from './dto/constructor-blog-filterable-count.dto';
import { ConstructorBlog } from './entity/constructor-blog.entity';
import { CreateConstructorBlogDto } from './dto/create-constructor-blog.dto';
import { UpdateConstructorBlogDto } from './dto/update-constructor-blog.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/authorization/guard/auth.guard';

@Resolver(() => ConstructorBlog)
export class ConstructorBlogResolver {
  constructor(private blogsService: ConstructorBlogService) {}

  @Query(() => [ConstructorBlog], { description: 'get all blogs' })
  public async getBlogs(): Promise<ConstructorBlog[]> {
    return await this.blogsService.getAllBlogs();
  }

  @Query(() => ConstructorBlog, { description: 'get 1 blog by id' })
  public async getBlogsById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<ConstructorBlog> {
    return await this.blogsService.getBlogById(id);
  }

  @Query(() => ConstructorBlog, {
    description:
      'this method get blogs by field description which like inputed',
  })
  public async getBlogsFilterByMetaBlogUrl(
    @Args('metaBlogUrl') metaBlogUrl: string,
  ): Promise<ConstructorBlog> {
    return await this.blogsService.getBlogsFilterByMetaBlogUrl(metaBlogUrl);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ConstructorBlog, { description: 'create blog' })
  public async createBlog(
    @Args('createBlog') createBlogObj: CreateConstructorBlogDto,
  ): Promise<ConstructorBlog> {
    return await this.blogsService.createBlog(createBlogObj);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ConstructorBlog, { description: 'change blog posted' })
  public async changeBlogPostStatus(
    @Args('changeBlogPostStatusDto')
    changeBlogPostStatusDto: ChangeBlogPostStatusDto,
  ): Promise<ConstructorBlog> {
    return await this.blogsService.changeBlogPostStatus(
      changeBlogPostStatusDto,
    );
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ConstructorBlog, { description: 'update blogs' })
  public async updateBlog(
    @Args('updateBlog') updateBlogObj: UpdateConstructorBlogDto,
  ): Promise<ConstructorBlog> {
    return await this.blogsService.updateBlog(updateBlogObj);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ConstructorBlog, { description: 'delete blog by id' })
  async deleteBlogById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<ConstructorBlog> {
    return await this.blogsService.deleteBlogById(id);
  }

  @Query(() => ConstructorBlogFilterableWithCountDto, {
    description:
      'universal sorting blog method, this method find by inputed field and can be sorted and paginate',
  })
  public async getFilteredBlog(
    @Args('filter') filter: FilterableBlogDto,
  ): Promise<ConstructorBlogFilterableWithCountDto> {
    return await this.blogsService.getBlogFilterable(filter);
  }
}
