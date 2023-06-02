import { UsePipes } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { PhotoBlog } from './entity/photo-blog.entity';
import { PhotoBlogService } from './photo-blog.service';
import { FilePipe } from 'src/modules/upload/pipe/check-file-size.pipe';
import { IFileUpload } from 'src/modules/upload/type/i-file-upload';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';

@Resolver(() => PhotoBlog)
export class PhotoBlogResolver {
  constructor(private readonly photoService: PhotoBlogService) {}

  @Query(() => [PhotoBlog], { description: 'get all photo ' })
  public async getAllBlogPhoto(): Promise<PhotoBlog[]> {
    return this.photoService.getAllPhotoBlog();
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Mutation(() => PhotoBlog, { description: 'method to create photo' })
  @UsePipes(FilePipe)
  public async createBlogPhoto(
    @Args('picture', { type: () => GraphQLUpload }) picture: IFileUpload,
  ): Promise<PhotoBlog> {
    return this.photoService.createPhotoBlog(picture);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Mutation(() => PhotoBlog, { description: 'deleted photo by id' })
  async deleteBlogPhotoById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<PhotoBlog> {
    return this.photoService.deletePhotoBlogById(id);
  }
}
