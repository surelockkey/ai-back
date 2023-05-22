import { Module } from '@nestjs/common';
import { WorkizApiService } from './workiz-api.service';
import { WorkizApiResolver } from './workiz-api.resolver';
import { WorkizCoreApiService } from './workiz-core.service';
import { SystemSettings } from 'src/modules/system-settings/entity/system-settings.entity';
import { SystemSettingsModule } from 'src/modules/system-settings/system-settings.module';

@Module({
  imports: [SystemSettingsModule],
  providers: [WorkizApiService, WorkizApiResolver, WorkizCoreApiService],
  exports: [WorkizApiService],
})
export class WorkizApiModule {}
