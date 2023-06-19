import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CarTemplate } from './entity/car-template.entity';
import { CreateCarTemplateDto } from './dto/car-template.dto';

@Injectable()
export class CarTemplateService extends CrudService<CarTemplate> {
  constructor(
    @InjectRepository(CarTemplate)
    private readonly carTemplateRepository: Repository<CarTemplate>,
  ) {
    super(carTemplateRepository);
  }

  public findOneItem(expression: FindOneOptions<CarTemplate>) {
    return this.carTemplateRepository.findOne(expression);
  }

  public async createMany(
    createCarTemplateDto: CreateCarTemplateDto[],
  ): Promise<CarTemplate[]> {
    return (
      await this.carTemplateRepository
        .createQueryBuilder()
        .insert()
        .into(CarTemplate)
        .values(createCarTemplateDto)
        .returning('*')
        .orUpdate(['template_id'], ['workiz_id'])
        .execute()
    ).generatedMaps as CarTemplate[];
  }
}
