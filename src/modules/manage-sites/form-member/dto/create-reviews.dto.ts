import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { IsSwearWord } from '../decorator/bad-words.decorator';
import { IsExist } from 'src/core/decorator/is-exists';

@InputType()
export class CreateReviewsDto {
  @IsEmail()
  @Field(() => String)
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsSwearWord()
  @MaxLength(30, {
    message: 'The maximum alloved number of characters is 30 characters',
  })
  @Field(() => String)
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsSwearWord()
  @MaxLength(100, {
    message: 'The maximum alloved number of characters is 100 characters',
  })
  @Field(() => String)
  title: string;

  @IsNotEmpty()
  @IsSwearWord()
  @Field(() => String)
  text: string;

  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'The minimum alloved value is 1' })
  @Max(5, { message: 'The maximum alloved value is 5' })
  @Field(() => Number, { nullable: true }) //defaultValue: 5
  rating?: number;

  // @IsExist('Locksmith')
  @Field(() => String)
  locksmith_id: string;
}
