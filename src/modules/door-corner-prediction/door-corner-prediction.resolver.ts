import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DoorCornerPredictionService } from './door-corner-prediction.service';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { FileUpload } from 'graphql-upload';
import { PredictionResult } from './dto/door-corner-prediction.dto';

@Resolver()
export class DoorCornerPredictionResolver {
  constructor(
    private readonly doorCornerPredictionService: DoorCornerPredictionService,
  ) {}

  @Mutation(() => PredictionResult)
  async predictDoorCorners(
    @Args('image', { type: () => GraphQLUpload }) image: FileUpload,
  ): Promise<void> {
    return this.doorCornerPredictionService.predictCornersFromUpload(image);
  }
}
