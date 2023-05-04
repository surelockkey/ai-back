import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FineTuneService } from './fine-tune.service';
import { FineTuneItem } from './entity/fine-tune-item.entity';
import { FineTune } from './entity/fine-tune.entity';
import { UpdateFineTuneItemDto } from './dto/fine-tune-item.dto';
import { OpenAiFineTune } from 'src/open-ai/dto/fine-tune.dto';

@Resolver()
export class FineTuneResolver {
  constructor(private readonly fineTuneService: FineTuneService) {}

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

  @Query(() => [FineTuneItem])
  getFineTuneList() {
    return this.fineTuneService.findAll({ deleted: false });
  }

  @Mutation(() => String)
  prepareFileForFineTune(@Args('filename') filename: string) {
    return this.fineTuneService.prepareFileForFineTune(filename);
  }

  @Mutation(() => FineTune)
  startFineTune() {
    return this.fineTuneService.startFineTune();
  }

  @Query(() => OpenAiFineTune)
  getFullLastFineTune() {
    return this.fineTuneService.getFullLastFineTune();
  }

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

  @Mutation(() => ID)
  deleteFineTuneItem(@Args('id', { type: () => ID }) id: string) {
    return this.fineTuneService.deleteByIdReturnId(id);
  }
}
