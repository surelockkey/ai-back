import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Technician } from './entity/technician.entity';
import { TechnicianResolver } from './technician.resolver';
import { TechnicianService } from './technician.service';
import { OilChangeModule } from './oil-change/oil-change.module';
import { TechnicianManagerModule } from './technician-manager/technician-manager.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Technician]),
    OilChangeModule,
    TechnicianManagerModule,
  ],
  providers: [TechnicianResolver, TechnicianService],
})
export class TechnicianModule {}
