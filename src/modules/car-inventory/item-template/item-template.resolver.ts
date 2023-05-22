import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ItemTemplateService } from './item-template.service';
import { ItemTemplate } from './entity/item-template.entity';
import { FileUpload } from 'graphql-upload';
import { ItemCompareResult } from './dto/item-compare-result.dto';

@Resolver()
export class ItemTemplateResolver {
  constructor(private readonly itemTemplateService: ItemTemplateService) {}

  @Mutation(() => [ItemTemplate])
  uploadItemTemplatesFromCsv(
    @Args('file', { type: () => GraphQLUpload }) file: Promise<FileUpload>,
  ) {
    return this.itemTemplateService.uploadItemTemplatesFromCsv(file);
  }

  @Mutation(() => [ItemCompareResult])
  checkItemQuantity(
    @Args('file', { type: () => GraphQLUpload }) file: Promise<FileUpload>,
    @Args('only_less', { type: () => Boolean, defaultValue: true })
    only_less: boolean,
  ) {
    return this.itemTemplateService.checkItemQuantity(file, only_less);
  }
}
