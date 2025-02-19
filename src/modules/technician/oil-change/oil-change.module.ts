import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OilChange } from './entity/oil-change.entity';
import { OilChangeResolver } from './oil-change.resolver';
import { OilChangeService } from './oil-change.service';
import { FileModule } from 'src/modules/file/file.module';

@Module({
  imports: [TypeOrmModule.forFeature([OilChange]), FileModule],
  providers: [OilChangeResolver, OilChangeService],
})
export class OilChangeModule {}
