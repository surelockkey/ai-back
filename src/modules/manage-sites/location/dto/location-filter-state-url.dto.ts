import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LocationFilterStateUrlDto {
    @Field(() => String)
    State?: string;

    @Field(() => String)
    Url?: string;
}
