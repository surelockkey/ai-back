import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { LocationFilterableDto } from './dto/location-filterable.dto';
import { LocationFilterStateUrlDto } from './dto/location-filter-state-url.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationFilterableWithCountDto } from './dto/location-filterable-count.dto';
import { Location } from './entity/location.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/create-location.dto';
import { FindPaginationDto } from 'src/core/dto/pagination.dto';
import { utils_constant } from '../utils/constant/constant';
import { TableName } from '../utils/type/table-name.type';
import { LocationRelationsDto } from '../utils/dto/location-relations.dto';
import { LocationRelationsField } from '../utils/type/location-relations-field.type';
import { UtilsService } from '../utils/utils.service';

@Injectable()
export class LocationGraphService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
    private readonly utilsService: UtilsService,
  ) {}

  public async getAllLocation(): Promise<Location[]> {
    return await this.locationRepository.find();
  }

  public async getLocationById(id: string): Promise<Location> {
    const location = await this.locationRepository.findOneBy({ id });
    if (!location) {
      throw new GraphQLError('Cannot get location');
    }
    return location;
  }

  public async getLocationPaginated({
    skip,
    take,
  }: FindPaginationDto): Promise<Location[]> {
    const getLocation = this.getLocation();
    return await getLocation.skip(skip).take(take).getMany();
  }

  public async getLocationsByState(stateInput: string): Promise<Location[]> {
    const getLocation = this.getLocation();
    return await getLocation
      .where('location.State ILIKE :state', {
        state: stateInput,
      })
      .getMany();
  }

  public async getLocationByStateAndUrl(
    filter: LocationFilterStateUrlDto,
  ): Promise<Location> {
    const getLocation = this.getLocation();
    return await getLocation
      .where('location.State ILIKE :state AND location.Url = :url', {
        state: filter.State,
        url: filter.Url,
      })
      .getOne();
  }
  private getLocation() {
    return (
      this.locationRepository
        .createQueryBuilder('location')
        .leftJoinAndSelect('location.Prices', 'prices')
        .leftJoinAndSelect('prices.list', 'prices_list')
        .leftJoinAndSelect('location.About_us', 'about_us')
        .leftJoinAndSelect('location.About_city', 'about_city')
        .leftJoinAndSelect('location.Testimonials', 'testimonials')
        .leftJoinAndSelect('testimonials.Reviews', 'reviews')
        .leftJoinAndSelect('location.Our_services', 'our_services')
        .leftJoinAndSelect('location.Hour_24_services', 'hour_24_services')
        .leftJoinAndSelect('location.Thumbnail', 'thumbnail')
        // .leftJoinAndSelect('thumbnail.formats', 'formats')
        // .leftJoinAndSelect('formats.thumbnail', 'formats_thumbnail')
        .leftJoinAndSelect('location.Photo', 'photo')
    );
  }

  public async createLocation(
    createLocationDto: CreateLocationDto,
  ): Promise<Location> {
    const relation_fields = {} as LocationRelationsDto;
    const { get_repository, properties_as_object } =
      utils_constant[TableName.LOCATION];

    properties_as_object.forEach((key: LocationRelationsField) => {
      relation_fields[key] = createLocationDto[key];
    });

    const created = this.locationRepository.create(createLocationDto);
    const resultSaveChildren = await this.utilsService.saveChildrens(
      relation_fields,
      get_repository,
    );

    const saved = await this.locationRepository.save({
      ...created,
      ...resultSaveChildren,
    });
    return await this.locationRepository.findOneBy({ id: saved.id });
  }

  public async updateLocation(payload: UpdateLocationDto): Promise<Location> {
    if (
      payload.Testimonials &&
      payload.Testimonials.Reviews &&
      payload.Testimonials.Reviews.length
    ) {
      payload.Testimonials.Reviews =
        await this.utilsService.createOrUpdateArray(
          payload.Testimonials.Reviews,
          'TestimonialsReviews',
        );
    }

    if (payload.Prices && payload.Prices.list && payload.Prices.list.length) {
      payload.Prices.list = await this.utilsService.createOrUpdateArray(
        payload.Prices.list,
        'LocationPricesList',
      );
    }

    await this.locationRepository.save(payload);
    return await this.locationRepository.findOneBy({ id: payload.id });
  }

  public async deleteLocationById(id: string): Promise<Location> {
    const location = await this.locationRepository.findOneBy({ id });
    if (!location) {
      throw new GraphQLError(`Cannot delete location by ${id}`);
    }

    await this.locationRepository.delete(id);
    return location;
  }

  public async getLocationFiltered(
    filter: LocationFilterableDto | null,
  ): Promise<LocationFilterableWithCountDto> {
    const getLocation = this.getLocation();

    if (!Object.keys(filter).length) {
      const result = await getLocation.getManyAndCount();
      return {
        location: result[0],
        locationCount: result[1],
      };
    }

    if (filter.id) {
      getLocation.andWhere('location.id = :id', { id: filter.id });
    }

    if (filter.Title) {
      getLocation.andWhere('location.Title ILIKE :title', {
        title: `%${filter.Title}%`,
      });
    }

    if (filter.Url) {
      getLocation.andWhere('location.Url = :url', { url: filter.Url });
    }

    if (filter.Description) {
      getLocation.andWhere('location.Description ILIKE :description', {
        description: `%${filter.Description}%`,
      });
    }

    if (filter.H1) {
      getLocation.andWhere('location.H1 ILIKE :h1', { h1: `%${filter.H1}%` });
    }

    if (filter.Subtitle) {
      getLocation.andWhere('location.Subtitle ILIKE :subtitle', {
        subtitle: `%${filter.Subtitle}%`,
      });
    }

    if (filter.Map_link) {
      getLocation.andWhere('location.Map_link ILIKE :map_link', {
        map_link: filter.Map_link,
      });
    }

    if (filter.Rich_template) {
      getLocation.andWhere('location.Rich_template ILIKE :rich_template', {
        rich_template: filter.Rich_template,
      });
    }

    if (filter.Phone_number) {
      getLocation.andWhere('location.Phone_number ILIKE :phone_number', {
        phone_number: filter.Phone_number,
      });
    }

    if (filter.published_at) {
      getLocation.andWhere('location.published_at = :published_at', {
        published_at: filter.published_at,
      });
    }
    if (filter.created_at) {
      getLocation.andWhere('location.created_at = :created_at', {
        created_at: filter.created_at,
      });
    }
    if (filter.updated_at) {
      getLocation.andWhere('location.updated_at = :updated_at', {
        updated_at: filter.updated_at,
      });
    }

    if (filter.Name) {
      getLocation.andWhere('location.Name ILIKE :name', {
        name: `%${filter.Name}%`,
      });
    }

    if (filter.State) {
      getLocation.andWhere('location.State ILIKE :state', {
        state: filter.State,
      });
    }

    if (filter.sortField) {
      getLocation.orderBy(
        `location.${filter.sortField}`,
        filter.sortType ? filter.sortType : 'ASC',
      );
    }

    if (filter.limitPaginate) {
      const locations = await getLocation.getManyAndCount();

      const paginated = await getLocation
        .skip(
          ((filter.pagePaginate ? filter.pagePaginate : 1) - 1) *
            filter.limitPaginate,
        )
        .take(filter.limitPaginate)
        .getMany();

      return {
        location: paginated,
        locationCount: locations[1],
      };
    }

    const result = await getLocation.getManyAndCount();
    return {
      location: result[0],
      locationCount: result[1],
    };
  }
}
