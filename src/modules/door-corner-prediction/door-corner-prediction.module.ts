import { Module } from '@nestjs/common';
import { DoorCornerPredictionService } from './door-corner-prediction.service';
import { DoorCornerPredictionResolver } from './door-corner-prediction.resolver';

@Module({
  imports: [],
  providers: [DoorCornerPredictionService, DoorCornerPredictionResolver],
})
export class DoorCornerPredictionModule {}
