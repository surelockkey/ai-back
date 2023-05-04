import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { SystemSettings } from './entity/system-settings.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SystemSettingsService extends CrudService<SystemSettings> {
  constructor(
    @InjectRepository(SystemSettings)
    private readonly systemSettingsRepository: Repository<SystemSettings>,
  ) {
    super(systemSettingsRepository);
  }

  public async getSystemSettings() {
    const res = await this.systemSettingsRepository.find();
    return res[0];
  }
}
