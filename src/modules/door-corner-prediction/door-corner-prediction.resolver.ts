import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DoorCornerPredictionService } from './door-corner-prediction.service';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { Int } from '@nestjs/graphql';
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
  ): Promise<PredictionResult> {
    return this.doorCornerPredictionService.predictCornersFromUpload(image);
  }

  @Mutation(() => PredictionResult)
  async predictDoorCornersWithRetry(
    @Args('image', { type: () => GraphQLUpload }) image: FileUpload,
    @Args('maxRetries', { type: () => Int, defaultValue: 3 })
    maxRetries: number,
  ): Promise<PredictionResult> {
    return this.doorCornerPredictionService.predictCornersFromUploadWithRetry(
      image,
      maxRetries,
    );
  }

  @Mutation(() => [PredictionResult])
  async batchPredictDoorCorners(
    @Args('images', { type: () => [GraphQLUpload] }) images: FileUpload[],
  ): Promise<PredictionResult[]> {
    return this.doorCornerPredictionService.batchPredictCornersFromUploads(
      images,
    );
  }
}
