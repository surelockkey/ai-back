import { UseGuards, UsePipes } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload';
import { PhotoBlog } from './Entity/photo-blog.entity';
import { PhotoBlogService } from './photo-blog.service';
import { GqlAuthGuard } from 'src/modules/authorization/guard/auth.guard';
import { FilePipe } from 'src/modules/upload/pipe/check-file-size.pipe';
import { IFileUpload } from 'src/modules/upload/type/i-file-upload';

@Resolver(() => PhotoBlog)
export class PhotoBlogResolver {
  constructor(private readonly photoService: PhotoBlogService) {}

  @Query(() => [PhotoBlog], { description: 'get all photo ' })
  public async getAllBlogPhoto(): Promise<PhotoBlog[]> {
    return this.photoService.getAllPhotoBlog();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => PhotoBlog, { description: 'method to create photo' })
  @UsePipes(FilePipe)
  public async createBlogPhoto(
    @Args('picture', { type: () => GraphQLUpload }) picture: IFileUpload,
  ): Promise<PhotoBlog> {
    return this.photoService.createPhotoBlog(picture);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => PhotoBlog, { description: 'deleted photo by id' })
  async deleteBlogPhotoById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<PhotoBlog> {
    return this.photoService.deletePhotoBlogById(id);
  }
}
