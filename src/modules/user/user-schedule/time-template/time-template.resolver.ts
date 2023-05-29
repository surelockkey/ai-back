import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TimeTemplateService } from './time-template.service';
import { TimeTemplate } from './entity/time-template.entity';
import {
  CreateTimeTemplateDto,
  UpdateTimeTemplateDto,
} from './dto/time-template.dto';
import { UserRole } from '../../enum/user-role.enum';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { LoggerService } from 'src/modules/logger/logger.service';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from 'src/modules/authorization/dto/current-user.dto';

@Resolver()
export class TimeTemplateResolver {
  constructor(
    private readonly timeTemplateService: TimeTemplateService,
    private readonly loggerService: LoggerService,
  ) {}

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => TimeTemplate)
  createTimeTemplate(
    @Args('time_template', { type: () => CreateTimeTemplateDto })
    time_template: CreateTimeTemplateDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      action: 'Tried to create time template',
      user_id,
      callback: () => this.timeTemplateService.create(time_template),
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => ID)
  deleteTimeTemplate(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      action: 'Tried to delete time template',
      user_id,
      callback: () => this.timeTemplateService.deleteByIdReturnId(id),
    });
  }

  @Mutation(() => TimeTemplate)
  updateTimeTemplate(
    @Args('time_template', { type: () => UpdateTimeTemplateDto })
    time_template: UpdateTimeTemplateDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      action: 'Tried to update time template',
      user_id,
      callback: () =>
        this.timeTemplateService.updateAndReturn(
          time_template.id,
          time_template,
        ),
    });
  }

  @Query(() => [TimeTemplate])
  getAllTimeTemplates() {
    return this.timeTemplateService.findAll();
  }
}
