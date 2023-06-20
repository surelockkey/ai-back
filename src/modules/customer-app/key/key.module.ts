import { Module } from '@nestjs/common';
import { KeyService } from './key.service';
import { KeyResolver } from './key.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Key } from './entity/key.entity';
import { KeyCarModule } from './key-car/key-car.module';
import { FileModule } from 'src/modules/file/file.module';

@Module({
  imports: [TypeOrmModule.forFeature([Key]), KeyCarModule, FileModule],
  providers: [KeyService, KeyResolver],
})
export class KeyModule {}
