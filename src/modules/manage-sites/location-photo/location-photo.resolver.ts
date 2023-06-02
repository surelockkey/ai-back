import { UseGuards, UsePipes } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { LocationPhoto } from './entity/location-photo.entity';
import { LocationPhotoService } from './location-photo.service';
import { GqlAuthGuard } from 'src/modules/authorization/guard/auth.guard';
import { FilePipe } from 'src/modules/upload/pipe/check-file-size.pipe';
import { IFileUpload } from 'src/modules/upload/type/i-file-upload';
import { SendDto } from '@tech-slk/nest-crud';

@Resolver(() => LocationPhoto)
export class LocationPhotoResolver {
  constructor(private readonly locationPhotoService: LocationPhotoService) {}

  @Query(() => [LocationPhoto])
  public async getAllLocationPhoto(): Promise<LocationPhoto[]> {
    return this.locationPhotoService.getAllLocationPhoto();
  }

  @UseGuards(GqlAuthGuard)
  @UsePipes(FilePipe)
  @Mutation(() => LocationPhoto)
  public async createLocationPhoto(
    @Args('picture', { type: () => GraphQLUpload }) picture: IFileUpload,
  ): Promise<LocationPhoto> {
    return this.locationPhotoService.createPhotoLocation(picture);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => LocationPhoto)
  public async deletePhotoLocationById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<LocationPhoto> {
    return this.locationPhotoService.deletePhotoLocationById(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SendDto)
  public async deleteManyPhoto(
    @Args('keys', { type: () => [String] }) keys: string[],
  ): Promise<SendDto> {
    return this.locationPhotoService.deleteManyPhoto(keys);
  }
}
