import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Countie } from './entity/countie.entity';
import { CountieResolver } from './countie.resolver';
import { CountieService } from './countie.service';

@Module({
  imports: [TypeOrmModule.forFeature([Countie])],
  providers: [CountieResolver, CountieService],
  exports: [CountieService],
})
export class CountieModule {}
