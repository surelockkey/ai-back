import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicianManager } from './entity/technician-manager.entity';
import { TechnicianManagerResolver } from './technician-manager.resolver';
import { TechnicianManagerService } from './technician-manager.service';

@Module({
  imports: [TypeOrmModule.forFeature([TechnicianManager])],
  providers: [TechnicianManagerResolver, TechnicianManagerService],
})
export class TechnicianManagerModule {}
