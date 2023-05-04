import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FineTuneService } from './fine-tune.service';
import { FineTuneItem } from './entity/fine-tune-item.entity';
import { FineTune } from './entity/fine-tune.entity';
import { GqlAuthGuard } from '../authorization/guard/auth.guard';
import { UseGuards } from '@nestjs/common';
import { OpenAiFineTune } from '../open-ai/dto/fine-tune.dto';
import { UpdateFineTuneItemDto } from './dto/fine-tune-item.dto';
import { LoggerService } from '../logger/logger.service';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from '../authorization/dto/current-user.dto';

@Resolver()
export class FineTuneResolver {
  constructor(
    private readonly fineTuneService: FineTuneService,
    private readonly loggerService: LoggerService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => FineTuneItem)
  createFineTuneItem(
    @Args('prompt') prompt: string,
    @Args('text') text: string,
    @CurrentUser()
    { user_id }: CurrentUserDto
  ) {
    return this.loggerService.actionLog({
      callback: () => this.fineTuneService.create({ prompt, text }),
      action: `Tried to create fine tune item: \n\n prompt: ${prompt} \n\n text: ${text}`,
      user_id,
    })
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
  startFineTune(
    @CurrentUser()
    { user_id }: CurrentUserDto
  ) {
    return this.loggerService.actionLog({
      callback: () => this.fineTuneService.startFineTune(),
      action: `Tried to start teaching`,
      user_id,
    })
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
    @CurrentUser()
    { user_id }: CurrentUserDto
  ) {
    return this.loggerService.actionLog({
      callback: () => this.fineTuneService.updateAndReturn(fine_tune_item.id, fine_tune_item),
      action: `Tried to update fine tune item`,
      user_id,
    })
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ID)
  deleteFineTuneItem(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser()
    { user_id }: CurrentUserDto
  ) {
    return this.loggerService.actionLog({
      callback: () => this.fineTuneService.deleteByIdReturnId(id),
      action: `Tried to delete fine tune item`,
      user_id,
    })
  }
}
