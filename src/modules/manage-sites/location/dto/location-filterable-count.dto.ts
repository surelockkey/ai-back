import { Field, ObjectType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { Location } from '../entity/location.entity';

@ObjectType()
export class LocationFilterableWithCountDto {
    @Field(() => [Location], { nullable: true })
    location?: Location[];

    @IsNumber()
    @Field(() => Number, { nullable: true })
    locationCount?: number;
}
