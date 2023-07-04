import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Key } from './entity/key.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateKeyDto, UpdateKeyDto } from './dto/key.dto';
import { FileService } from 'src/modules/file/file.service';
import { KeyCarService } from './key-car/key-car.service';
import { GraphQLError } from 'graphql';

@Injectable()
export class KeyService extends CrudService<Key> {
  constructor(
    @InjectRepository(Key) private readonly keyRepository: Repository<Key>,
    private readonly keyCarService: KeyCarService,
    private readonly fileService: FileService,
    private readonly dataSource: DataSource,
  ) {
    super(keyRepository);
  }

  public async createKey(create_key_dto: CreateKeyDto): Promise<Key> {
    const queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();

    try {
      const { photo, car_ids, ...key_dto } = create_key_dto;

      let photo_id;
      if (photo) {
        photo_id = await this.fileService.uploadImageSharp(
          await photo,
          queryRunner.manager,
          queryRunner,
        );
      }

      const key = await queryRunner.manager.save(Key, {
        ...key_dto,
        photo_id,
      });

      if (car_ids && car_ids.length) {
        await this.keyCarService.createManyKeyCarsTransaction(
          key.id,
          car_ids,
          queryRunner,
        );
      }

      await queryRunner.commitTransaction();

      return this.findOneById(key.id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }

  public async updateKey(update_key_dto: UpdateKeyDto): Promise<Key> {
    const { photo, ...key_dto } = update_key_dto;

    await this.update(key_dto.id, key_dto);

    if (photo) {
      const key = await this.findOneById(key_dto.id);

      await this.fileService.updateImageSharp(await photo, key.photo_id);
    }

    return this.findOneById(key_dto.id);
  }

  public async getKeysByCar(car_id: string) {
    return await this.keyRepository.find({ where: { cars: { car_id } } });
  }
}
