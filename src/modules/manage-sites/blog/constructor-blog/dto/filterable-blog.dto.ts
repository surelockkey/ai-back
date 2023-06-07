import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { FilterableBlogEnum } from '../enum/filterable-blog.enum';
import { SortEnum } from 'src/core/enum/sort.enum';

@InputType()
export class FilterableBlogDto {
  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  posted?: boolean;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  blockDescription?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  previewInfoTitle?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  previewInfoDate?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  metaInfoUrlForBlog?: string;

  @IsOptional()
  @Field(() => FilterableBlogEnum, { nullable: true })
  sortField?: FilterableBlogEnum;

  @IsOptional()
  @Field(() => SortEnum, { nullable: true })
  sortType?: SortEnum;

  @IsOptional()
  @IsNumber()
  @Field(() => Number, { nullable: true })
  pagePaginate?: number;

  @IsOptional()
  @IsNumber()
  @Field(() => Number, { nullable: true })
  limitPaginate?: number;
}
