import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './entity/car.entity';

@Resolver()
export class CarResolver {
  constructor(private readonly carService: CarService) {}

  @Query(() => [Car])
  getAllCars() {
    return this.carService.getAllCars();
  }

  @Query(() => [Car])
  searchCars(
    @Args('make', { nullable: true }) make?: string,
    @Args('model', { nullable: true }) model?: string,
  ): Promise<Car[]> {
    return this.carService.searchCars(make, model);
  }

  @Mutation(() => Car)
  createCar(@Args('carDto') car_dto: CreateCarDto): Promise<Car> {
    return this.carService.createCar(car_dto);
  }
}
