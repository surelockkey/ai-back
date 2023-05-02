import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FineTuneService } from './fine-tune.service';
import { FineTuneItem } from './entity/fine-tune-item.entity';
import { FineTune } from './entity/fine-tune.entity';

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
}
