import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { ItemTemplate } from './entity/item-template.entity';
import { CreateItemTemplateDto } from './dto/item-template.dto';

@Injectable()
export class ItemTemplateService extends CrudService<ItemTemplate> {
  constructor(
    @InjectRepository(ItemTemplate)
    private readonly itemTemplateRepository: Repository<ItemTemplate>,
  ) {
    super(itemTemplateRepository);
  }

  public createMany(
    createItemTemplateDto: CreateItemTemplateDto[],
  ): Promise<ItemTemplate[]> {
    return this.itemTemplateRepository.save(createItemTemplateDto);
  }
}
