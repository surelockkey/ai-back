import { UsePipes } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { LocationPhoto } from './entity/location-photo.entity';
import { LocationPhotoService } from './location-photo.service';
import { FilePipe } from 'src/modules/upload/pipe/check-file-size.pipe';
import { IFileUpload } from 'src/modules/upload/type/i-file-upload';
import { SendDto } from '@tech-slk/nest-crud';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';

@Resolver(() => LocationPhoto)
export class LocationPhotoResolver {
  constructor(private readonly locationPhotoService: LocationPhotoService) {}

  @Query(() => [LocationPhoto])
  public async getAllLocationPhoto(): Promise<LocationPhoto[]> {
    return this.locationPhotoService.getAllLocationPhoto();
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @UsePipes(FilePipe)
  @Mutation(() => LocationPhoto)
  public async createLocationPhoto(
    @Args('picture', { type: () => GraphQLUpload }) picture: IFileUpload,
  ): Promise<LocationPhoto> {
    return this.locationPhotoService.createPhotoLocation(picture);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Mutation(() => LocationPhoto)
  public async deletePhotoLocationById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<LocationPhoto> {
    return this.locationPhotoService.deletePhotoLocationById(id);
  }

  @RoleGuard(UserRole.ADMIN, UserRole.SEO)
  @Mutation(() => SendDto)
  public async deleteManyPhoto(
    @Args('keys', { type: () => [String] }) keys: string[],
  ): Promise<SendDto> {
    return this.locationPhotoService.deleteManyPhoto(keys);
  }
}
