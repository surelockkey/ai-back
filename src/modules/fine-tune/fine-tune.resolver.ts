import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FineTuneService } from './fine-tune.service';
import { FineTuneItem } from './entity/fine-tune-item.entity';
import { FineTune } from './entity/fine-tune.entity';
import { OpenAiFineTune } from '../open-ai/dto/fine-tune.dto';
import { UpdateFineTuneItemDto } from './dto/fine-tune-item.dto';
import { LoggerService } from '../logger/logger.service';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from '../authorization/dto/current-user.dto';
import { RoleGuard } from '../authorization/decorator/role.decorator';
import { UserRole } from '../user/enum/user-role.enum';

@Resolver()
export class FineTuneResolver {
  constructor(
    private readonly fineTuneService: FineTuneService,
    private readonly loggerService: LoggerService,
  ) {}

  @RoleGuard(UserRole.ADMIN)
  @Mutation(() => FineTuneItem)
  createFineTuneItem(
    @Args('prompt') prompt: string,
    @Args('text') text: string,
    @CurrentUser()
    { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.fineTuneService.create({ prompt, text }),
      action: `Tried to create fine tune item: \n\n prompt: ${prompt} \n\n text: ${text}`,
      user_id,
    });
  }

  @RoleGuard(UserRole.ADMIN)
  @Query(() => [FineTuneItem])
  getFineTuneList() {
    return this.fineTuneService.findAll({ deleted: false });
  }

  @RoleGuard(UserRole.ADMIN)
  @Mutation(() => String)
  prepareFileForFineTune(@Args('filename') filename: string) {
    return this.fineTuneService.prepareFileForFineTune(filename);
  }

  @RoleGuard(UserRole.ADMIN)
  @Mutation(() => FineTune)
  startFineTune(
    @CurrentUser()
    { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.fineTuneService.startFineTune(),
      action: `Tried to start teaching`,
      user_id,
    });
  }

  @RoleGuard(UserRole.ADMIN)
  @Query(() => OpenAiFineTune)
  getFullLastFineTune() {
    return this.fineTuneService.getFullLastFineTune();
  }

  @RoleGuard(UserRole.ADMIN)
  @Mutation(() => FineTuneItem)
  updateFineTuneItem(
    @Args('fine_tune_item', { type: () => UpdateFineTuneItemDto })
    fine_tune_item: UpdateFineTuneItemDto,
    @CurrentUser()
    { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () =>
        this.fineTuneService.updateAndReturn(fine_tune_item.id, fine_tune_item),
      action: `Tried to update fine tune item`,
      user_id,
    });
  }

  @RoleGuard(UserRole.ADMIN)
  @Mutation(() => ID)
  deleteFineTuneItem(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser()
    { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.fineTuneService.deleteByIdReturnId(id),
      action: `Tried to delete fine tune item`,
      user_id,
    });
  }
}
