import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FineTuneService } from './fine-tune.service';
import { FineTuneItem } from './entity/fine-tune-item.entity';
import { FineTune } from './entity/fine-tune.entity';
import { GqlAuthGuard } from '../authorization/guard/auth.guard';
import { UseGuards } from '@nestjs/common';
import { OpenAiFineTune } from '../open-ai/dto/fine-tune.dto';
import { UpdateFineTuneItemDto } from './dto/fine-tune-item.dto';

@Resolver()
export class FineTuneResolver {
  constructor(private readonly fineTuneService: FineTuneService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => FineTuneItem)
  createFineTuneItem(
    @Args('prompt') prompt: string,
    @Args('text') text: string,
  ) {
    return this.fineTuneService.create({
      prompt,
      text,
    });
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [FineTuneItem])
  getFineTuneList() {
    return this.fineTuneService.findAll({ deleted: false });
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => String)
  prepareFileForFineTune(@Args('filename') filename: string) {
    return this.fineTuneService.prepareFileForFineTune(filename);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => FineTune)
  startFineTune() {
    return this.fineTuneService.startFineTune();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => OpenAiFineTune)
  getFullLastFineTune() {
    return this.fineTuneService.getFullLastFineTune();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => FineTuneItem)
  updateFineTuneItem(
    @Args('fine_tune_item', { type: () => UpdateFineTuneItemDto })
    fine_tune_item: UpdateFineTuneItemDto,
  ) {
    return this.fineTuneService.updateAndReturn(
      fine_tune_item.id,
      fine_tune_item,
    );
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ID)
  deleteFineTuneItem(@Args('id', { type: () => ID }) id: string) {
    return this.fineTuneService.deleteByIdReturnId(id);
  }
}
