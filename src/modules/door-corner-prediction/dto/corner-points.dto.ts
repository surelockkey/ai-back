import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PointDto {
  @Field(() => Int)
  x: number;
  @Field(() => Int)
  y: number;
}

@ObjectType()
export class CornerPointsDto {
  @Field(() => PointDto)
  topLeft: PointDto;
  @Field(() => PointDto)
  topRight: PointDto;
  @Field(() => PointDto)
  bottomLeft: PointDto;
  @Field(() => PointDto)
  bottomRight: PointDto;
}
