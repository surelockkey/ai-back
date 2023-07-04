import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GraphQLError } from 'graphql';
import { DataSource, FindManyOptions, Raw, Repository } from 'typeorm';

import { CreateCarDto } from './dto/create-car.dto';
import { CarMake } from './entity/car-make.entity';
import { CarModel } from './entity/car-model.entity';
import { CarYear } from './entity/car-year.entity';
import { Car } from './entity/car.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarMake) private carMakeRepository: Repository<CarMake>,
    @InjectRepository(CarModel)
    private carModelRepository: Repository<CarModel>,
    @InjectRepository(CarYear) private carYearRepository: Repository<CarYear>,
    @InjectRepository(Car) private carRepository: Repository<Car>,
    private readonly connection: DataSource,
  ) {}

  public async getAllCars(): Promise<Car[]> {
    return this.carRepository.find();
  }

  public async getCarByInfo(info: CreateCarDto) {
    return this.carRepository.findOne({ where: info });
  }

  public async getCarById(id: string) {
    return this.carRepository.findOne({ where: { id } });
  }

  public async findCars(options: FindManyOptions<Car>) {
    return this.carRepository.find(options);
  }

  public async createCar(car_dto: CreateCarDto): Promise<Car> {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.startTransaction();
    const manager = queryRunner.manager;

    try {
      const { ...create_car_dto } = car_dto;

      const car_make = await manager.findOne(CarMake, {
        where: {
          car_make: car_dto.make,
        },
      });

      if (!car_make) {
        await manager.save(CarMake, { car_make: car_dto.make });
      }

      let car_model = await manager.findOne(CarModel, {
        where: {
          car_make_key: car_dto.make,
          car_model: car_dto.model,
        },
      });

      if (!car_model) {
        car_model = await manager.save(CarModel, {
          car_make_key: car_dto.make,
          car_model: car_dto.model,
        });
      }

      const car_year = await manager.findOne(CarYear, {
        where: {
          model_id: car_model.id,
          car_year: car_dto.year,
        },
      });

      if (!car_year) {
        await manager.save(CarYear, {
          model_id: car_model.id,
          car_year: car_dto.year,
        });
      }

      const car = await manager.findOne(Car, { where: { ...create_car_dto } });

      await queryRunner.commitTransaction();

      return car;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError('Failed to save car');
    } finally {
      await queryRunner.release();
    }
  }

  public async searchCars(make?: string, model?: string): Promise<Car[]> {
    if (model && !make) {
      throw new GraphQLError('Car make is required for search by car model');
    }

    const makes = await this.carRepository.createQueryBuilder('car');

    if (make) {
      makes.where({
        make: Raw((alias) => `LOWER(${alias}) = :make`, {
          make: make.toLowerCase(),
        }),
      });

      if (!model) {
        makes.distinctOn(['car.model']).orderBy('model', 'ASC');
      }
    }

    if (model) {
      makes
        .andWhere({
          model: Raw((alias) => `LOWER(${alias}) = :model`, {
            model: model.toLowerCase(),
          }),
        })
        .distinctOn(['car.year'])
        .orderBy('year', 'ASC');
    }

    if (!make && !model) {
      makes.distinctOn(['car.make']).orderBy('make', 'ASC');
    }

    return makes.getMany();
  }
}
