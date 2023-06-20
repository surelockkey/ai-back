import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { KeyCar } from './entity/key-car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';

@Injectable()
export class KeyCarService extends CrudService<KeyCar> {
  constructor(
    @InjectRepository(KeyCar)
    private readonly keyCarRepository: Repository<KeyCar>,
  ) {
    super(keyCarRepository);
  }

  public async addManyCarsToKey(
    key_id: string,
    car_ids: string[],
  ): Promise<KeyCar[]> {
    return await this.keyCarRepository.save(
      car_ids.map((car_id) => ({ car_id, key_id })),
    );
  }

  public async createManyKeyCarsTransaction(
    key_id: string,
    car_ids: string[],
    queryRunner: QueryRunner,
  ) {
    return await queryRunner.manager.save(
      KeyCar,
      car_ids.map((car_id) => ({
        key_id,
        car_id,
      })),
    );
  }
}
