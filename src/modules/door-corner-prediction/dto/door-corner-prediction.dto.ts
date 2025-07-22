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
  @Field(() => Float)
  x: number;

  @Field(() => Float)
  y: number;

  @Field(() => Float)
  width: number;

  @Field(() => Float)
  height: number;
}
