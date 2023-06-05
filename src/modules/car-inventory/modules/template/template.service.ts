import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Template } from './entity/template.entity';
import { CreateTemplateDto } from './dto/template.dto';

@Injectable()
export class TemplateService extends CrudService<Template> {
  constructor(
    @InjectRepository(Template)
    private readonly templateRepository: Repository<Template>,
  ) {
    super(templateRepository);
  }

  public createMany(createTemplateDto: CreateTemplateDto[]): Promise<Template[]> {
    return this.templateRepository.save(createTemplateDto);
  }
}
