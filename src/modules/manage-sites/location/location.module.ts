import { Module } from '@nestjs/common';
import { LocationGraphService } from './location.service';
import { LocationGraphResolver } from './location.resolver';
import { Location } from './entity/location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilsModule } from '../utils/utils.module';

@Module({
  imports: [TypeOrmModule.forFeature([Location]), UtilsModule],
  providers: [LocationGraphService, LocationGraphResolver],
})
export class LocationModule {}
