import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DoorCornerPredictionService } from './door-corner-prediction.service';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { FileUpload } from 'graphql-upload';
import { CornerPointsDto } from './dto/corner-points.dto';

@Resolver()
export class DoorCornerPredictionResolver {
  constructor(
    private readonly doorCornerPredictionService: DoorCornerPredictionService,
  ) {}

  @Mutation(() => [CornerPointsDto])
  async predictDoorCorners(
    @Args('image', { type: () => GraphQLUpload }) image: FileUpload,
  ): Promise<CornerPointsDto[]> {
    return this.doorCornerPredictionService.predictCornersFromUpload(image);
  }
}
