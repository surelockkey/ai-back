import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { ItemTemplateService } from './item-template.service';
import { ItemTemplate } from './entity/item-template.entity';
import { CreateItemTemplateDto, UpdateItemTemplateDto } from './dto/item-template.dto';


@Resolver()
export class ItemTemplateResolver {
  constructor(private readonly itemTemplateService: ItemTemplateService) {}

  @Mutation(() => ID)
  deleteItemTemplate(
    @Args('id', { type: () => ID })
    id: string
  ): Promise<string> {
    return this.itemTemplateService.deleteByIdReturnId(id);
  }

  @Mutation(() => ItemTemplate)
  updateItemTemplate(
    @Args('updateItemTemplateDto', { type: () => UpdateItemTemplateDto })
    updateItemTemplateDto: UpdateItemTemplateDto
  ): Promise<ItemTemplate> {
    const { id, ...updateDto } = updateItemTemplateDto;
    return this.itemTemplateService.updateAndReturn(id, updateDto);
  }

  @Mutation(() => ItemTemplate)
  createItemTemplate(
    @Args('createItemTemplateDto', { type: () => CreateItemTemplateDto })
    createItemTemplateDto: CreateItemTemplateDto
  ): Promise<ItemTemplate> {
    return this.itemTemplateService.create(createItemTemplateDto);
  }
}