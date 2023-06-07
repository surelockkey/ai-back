import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarInventoryService } from './car-inventory.service';
import { WorkizContainer } from '../api/workiz-api/dto/container.dto';
import { FindContainerAndTemplate } from './dto/find-container-and-template.dto';
import { ItemCompareResult } from './dto/item-compare-result.dto';
import { ItemTemplateService } from './modules/item-template/item-template.service';
import { CreateItemTemplateDto, UpdateItemTemplateDto } from './modules/item-template/dto/item-template.dto';
import { ItemTemplate } from './modules/item-template/entity/item-template.entity';
import { TemplateService } from './modules/template/template.service';
import { Template } from './modules/template/entity/template.entity';
import { CreateTemplateDto, UpdateTemplateDto } from './modules/template/dto/template.dto';
import { CreateCarTemplateDto } from './modules/car-template/dto/car-template.dto';
import { CarTemplate } from './modules/car-template/entity/car-template.entity';
import { CarTemplateService } from './modules/car-template/car-template.service';

@Resolver()
export class CarInventoryResolver {
  constructor(
    private readonly carInventoryService: CarInventoryService,
    private readonly itemTemplateService: ItemTemplateService,
    private readonly templateService: TemplateService,
    private readonly carTemplateService: CarTemplateService,
  ) {}

  // Inventory

  @Query(() => [WorkizContainer])
  async getAllContainers(): Promise<WorkizContainer[]> {
    return (await this.carInventoryService.findAllContainers()).data;
  }

  @Query(() => [Template])
  async getAllTemplates(): Promise<Template[]> {
    return this.templateService.findAll();
  }

  @Query(() => Template)
  async getTemplateById(
    @Args('id', { type: () => ID })
    id: string
  ): Promise<Template> {
    return this.templateService.findOneById(id);
  }

  @Query(() => FindContainerAndTemplate)
  async getContainerById(
    @Args('id', { type: () => String })
    id: string
  ): Promise<FindContainerAndTemplate> {   
    return await this.carInventoryService.findContainerAndTemplateById(id);
  }

  @Query(() => [ItemCompareResult])
  generateDifferenceReport(
    @Args('workiz_id', { type: () => String })
    workiz_id: string,
    @Args('only_less', { type: () => Boolean, defaultValue: true })
    only_less: boolean,
  ) {
    return this.carInventoryService.generateDifferenceReport(workiz_id, only_less);
  }

  @Mutation(() => [CarTemplate])
  assignManyTemplateToCar(
    @Args('createCarTemplateDto', { type: () => [CreateCarTemplateDto] })
    createCarTemplateDto: CreateCarTemplateDto[]
  ): Promise<CarTemplate[]> {
    return this.carTemplateService.createMany(createCarTemplateDto);
  }

  // ItemTemplate

  @Mutation(() => [ID])
  async deleteManyItemTemplates(
    @Args('ids', { type: () => [ID] })
    ids: string[]
  ): Promise<string[]> {
    await this.itemTemplateService.deleteManyByIds(ids);
    return ids;
  }

  @Mutation(() => ItemTemplate)
  updateItemTemplate(
    @Args('updateItemTemplateDto', { type: () => UpdateItemTemplateDto })
    updateItemTemplateDto: UpdateItemTemplateDto
  ): Promise<ItemTemplate> {
    const { id, ...updateDto } = updateItemTemplateDto;
    return this.itemTemplateService.updateAndReturn(id, updateDto);
  }

  @Mutation(() => [ItemTemplate])
  createManyItemTemplates(
    @Args('createItemTemplateDto', { type: () => [CreateItemTemplateDto] })
    createItemTemplateDto: CreateItemTemplateDto[]
  ): Promise<ItemTemplate[]> {
    return this.itemTemplateService.createMany(createItemTemplateDto);
  }

  // Template

  @Mutation(() => [ID])
  async deleteManyTemplates(
    @Args('ids', { type: () => [ID] })
    ids: string[]
  ): Promise<string[]> {
    await this.templateService.deleteManyByIds(ids);
    return ids;
  }

  @Mutation(() => Template)
  updateTemplate(
    @Args('updateTemplateDto', { type: () => UpdateTemplateDto })
    updateTemplateDto: UpdateTemplateDto
  ): Promise<Template> {
    const { id, ...updateDto } = updateTemplateDto;
    return this.templateService.updateAndReturn(id, updateDto);
  }

  @Mutation(() => [Template])
  createManyTemplates(
    @Args('createTemplateDto', { type: () => [CreateTemplateDto] })
    createTemplateDto: CreateTemplateDto[]
  ): Promise<Template[]> {
    return this.templateService.createMany(createTemplateDto);
  }
}