import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CornerCoordinates {
  @Field(() => Float)
  x: number;

  @Field(() => Float)
  y: number;

  @Field()
  label: string;
}

@ObjectType()
export class PredictionResult {
  @Field(() => [CornerCoordinates])
  corners: CornerCoordinates[];

  @Field(() => Float)
  confidence: number;

  @Field()
  processedAt: Date;
}
