import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SystemSettingsService } from './system-settings.service';
import { SystemSettings } from './entity/system-settings.entity';
import { UpdateSystemSettingsDto } from './dto/system-settings.dto';

@Resolver()
export class SystemSettingsResolver {
  constructor(private readonly systemSettingsService: SystemSettingsService) {}

  @Mutation(() => SystemSettings)
  createSystemSettings(
    @Args('max_tokens', { type: () => Int }) max_tokens: number,
  ) {
    return this.systemSettingsService.create({
      max_tokens,
      active_model: 'text-davinci-003',
    });
  }

  @Mutation(() => SystemSettings)
  updateSystemSettings(
    @Args('system_settings', { type: () => UpdateSystemSettingsDto })
    system_settings: UpdateSystemSettingsDto,
  ) {
    return this.systemSettingsService.updateByCriteriaAndReturnOne(
      {},
      system_settings,
    );
  }

  @Query(() => SystemSettings)
  getSystemSettings() {
    return this.systemSettingsService.getSystemSettings();
  }
}
