import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { FilterableLocationEnum } from '../enum/filterable-location.enum';
import { SortEnum } from 'src/core/enum/sort.enum';

@InputType()
export class LocationFilterableDto {
  @IsOptional()
  @Field(() => ID, { nullable: true })
  id?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  Title?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  Url?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  Description?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  H1?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  Subtitle?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  Map_link?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  Rich_template?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  Phone_number?: string;

  @IsOptional()
  @IsNumber()
  @Field(() => Number, { nullable: true })
  published_at?: number;

  @IsOptional()
  @IsNumber()
  @Field(() => Number, { nullable: true })
  created_at?: number;

  @IsOptional()
  @IsNumber()
  @Field(() => Number, { nullable: true })
  updated_at?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  Name?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  State?: string;

  @IsOptional()
  @Field(() => FilterableLocationEnum, { nullable: true })
  sortField?: FilterableLocationEnum;

  @IsOptional()
  @Field(() => SortEnum, { nullable: true })
  sortType?: SortEnum;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Field(() => Number, { nullable: true })
  pagePaginate?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Field(() => Number, { nullable: true })
  limitPaginate?: number;
}
