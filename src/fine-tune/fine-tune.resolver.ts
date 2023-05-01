import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FineTuneService } from './fine-tune.service';
import { FineTune } from './entity/fine-tune.entity';

@Resolver()
export class FineTuneResolver {
  constructor(private readonly fineTuneService: FineTuneService) {}

  @Mutation(() => FineTune)
  addToFineTune(@Args('prompt') prompt: string, @Args('text') text: string) {
    return this.fineTuneService.create({
      prompt,
      text,
    });
  }

  @Query(() => [FineTune])
  getFineTuneList() {
    return this.fineTuneService.findAll({ deleted: false });
  }

  @Mutation(() => String)
  prepareFileForFileTune() {
    return this.fineTuneService.prepareFileForFileTune();
  }
}
