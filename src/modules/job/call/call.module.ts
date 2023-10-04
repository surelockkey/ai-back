import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Call } from './entity/call.entity';
import { CallResolver } from './call.resolver';
import { CallService } from './call.service';
import { WorkizApiModule } from 'src/modules/api/workiz-api/workiz-api.module';

@Module({
  imports: [TypeOrmModule.forFeature([Call]), WorkizApiModule],
  providers: [CallResolver, CallService],
  exports: [CallService],
})
export class CallModule {}
