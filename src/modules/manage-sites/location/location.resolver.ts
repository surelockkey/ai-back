import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocationFilterableDto } from './dto/location-filterable.dto';
import { LocationFilterStateUrlDto } from './dto/location-filter-state-url.dto';
import { LocationGraphService } from './location.service';
import { LocationFilterableWithCountDto } from './dto/location-filterable-count.dto';
import { Location } from './entity/location.entity';
import { UpdateLocationDto } from './dto/update-location.dto';
import { CreateLocationDto } from './dto/create-location.dto';
import { UseGuards } from '@nestjs/common';
import { FindPaginationDto } from 'src/core/dto/pagination.dto';
import { GqlAuthGuard } from 'src/modules/authorization/guard/auth.guard';

@Resolver(() => Location)
export class LocationGraphResolver {
  constructor(private readonly locationGraphService: LocationGraphService) {}

  @Query(() => [Location])
  public async getAllLocation(): Promise<Location[]> {
    return this.locationGraphService.getAllLocation();
  }

  @Query(() => Location)
  public async getLocationById(
    @Args('id', { type: () => String }) _id: string,
  ): Promise<Location> {
    return await this.locationGraphService.getLocationById(_id);
  }

  @Query(() => [Location])
  public async getLocationPaginate(
    @Args('paginate') paginate: FindPaginationDto,
  ): Promise<Location[]> {
    return await this.locationGraphService.getLocationPaginated(paginate);
  }

  @Query(() => [Location])
  public async getLocationByState(
    @Args('state') state: string,
  ): Promise<Location[]> {
    return await this.locationGraphService.getLocationsByState(state);
  }

  @Query(() => Location)
  public async getLocationByStateAndUrl(
    @Args({ name: 'filter', type: () => LocationFilterStateUrlDto })
    filter: LocationFilterStateUrlDto,
  ): Promise<Location> {
    return await this.locationGraphService.getLocationByStateAndUrl(filter);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Location)
  public async createLocation(
    @Args('createLocationDto') createLocationDto: CreateLocationDto,
  ): Promise<Location> {
    return await this.locationGraphService.createLocation(createLocationDto);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Location)
  public async updateLocation(
    @Args('updateLocationDto') updateLocation: UpdateLocationDto,
  ): Promise<Location> {
    return await this.locationGraphService.updateLocation(updateLocation);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Location)
  public async deleteLocationById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Location> {
    return await this.locationGraphService.deleteLocationById(id);
  }

  @Query(() => LocationFilterableWithCountDto)
  public async getLocationFiltered(
    @Args('filter') filter: LocationFilterableDto,
  ): Promise<LocationFilterableWithCountDto> {
    return await this.locationGraphService.getLocationFiltered(filter);
  }
}
