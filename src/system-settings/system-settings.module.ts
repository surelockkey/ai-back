import { Module } from '@nestjs/common';
import { SystemSettingsService } from './system-settings.service';
import { SystemSettingsResolver } from './system-settings.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemSettings } from './entity/system-settings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SystemSettings])],
  providers: [SystemSettingsService, SystemSettingsResolver],
  exports: [SystemSettingsService],
})
export class SystemSettingsModule {}
