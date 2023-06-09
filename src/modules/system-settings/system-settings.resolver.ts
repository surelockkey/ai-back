import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SystemSettingsService } from './system-settings.service';
import { SystemSettings } from './entity/system-settings.entity';
import { UpdateSystemSettingsDto } from './dto/system-settings.dto';
import { LoggerService } from '../logger/logger.service';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from '../authorization/dto/current-user.dto';
import { RoleGuard } from '../authorization/decorator/role.decorator';
import { UserRole } from '../user/enum/user-role.enum';

@Resolver()
export class SystemSettingsResolver {
  constructor(
    private readonly systemSettingsService: SystemSettingsService,
    private readonly loggerService: LoggerService,
  ) {}

  @RoleGuard(UserRole.ADMIN)
  @Mutation(() => SystemSettings)
  createSystemSettings(
    @Args('max_tokens', { type: () => Int }) max_tokens: number,
  ) {
    return this.systemSettingsService.create({
      max_tokens,
      active_model: 'text-davinci-003',
    });
  }

  @RoleGuard(UserRole.ADMIN)
  @Mutation(() => SystemSettings)
  updateSystemSettings(
    @Args('system_settings', { type: () => UpdateSystemSettingsDto })
    system_settings: UpdateSystemSettingsDto,
    @CurrentUser()
    { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () =>
        this.systemSettingsService.updateByCriteriaAndReturnOne(
          {},
          system_settings,
        ),
      user_id,
      action: `Tried update application settings`,
    });
  }

  @Query(() => SystemSettings)
  getSystemSettings() {
    return this.systemSettingsService.getSystemSettings();
  }
}
