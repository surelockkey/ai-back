import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsBoolean,
  IsArray,
  IsEnum,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ConstructedPageType } from '../enum/constructed-page-type.enum';

// Base DTOs for nested objects
export class RestConstructedPhotoDto {
  @ApiPropertyOptional({ description: 'Alt text for the image' })
  @IsOptional()
  @IsString()
  alt?: string;

  @ApiPropertyOptional({ description: 'Title for the image' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ description: 'Base64 encoded image data or image URL' })
  @IsString()
  imageData: string;
}

export class RestSocialLinkDto {
  @ApiProperty({ description: 'Social platform name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Social profile URL' })
  @IsString()
  url: string;
}

export class RestConstructedBlockDto {
  @ApiPropertyOptional({ description: 'Position of the block' })
  @IsOptional()
  @IsNumber()
  position_block?: number;

  @ApiPropertyOptional({ description: 'Block headline' })
  @IsOptional()
  @IsString()
  headline?: string;

  @ApiPropertyOptional({ description: 'Block description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Secondary description' })
  @IsOptional()
  @IsString()
  description_secondary?: string;

  @ApiPropertyOptional({ description: 'Left text content' })
  @IsOptional()
  @IsString()
  text_left?: string;

  @ApiPropertyOptional({ description: 'Right text content' })
  @IsOptional()
  @IsString()
  text_right?: string;

  @ApiPropertyOptional({ description: 'List content' })
  @IsOptional()
  @IsString()
  list?: string;

  @ApiPropertyOptional({ description: 'Main text content' })
  @IsOptional()
  @IsString()
  text?: string;

  @ApiPropertyOptional({ description: 'Last text content' })
  @IsOptional()
  @IsString()
  last_text?: string;

  @ApiPropertyOptional({ description: 'Last list content' })
  @IsOptional()
  @IsString()
  last_list?: string;

  @ApiPropertyOptional({ description: 'Block styles' })
  @IsOptional()
  @IsString()
  styles?: string;

  @ApiPropertyOptional({ description: 'First list content' })
  @IsOptional()
  @IsString()
  first_list?: string;

  @ApiPropertyOptional({ description: 'Block type' })
  @IsOptional()
  @IsString()
  type_block?: string;

  @ApiPropertyOptional({ description: 'Body text content' })
  @IsOptional()
  @IsString()
  body_text?: string;

  @ApiPropertyOptional({ description: 'Block state' })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({
    type: RestConstructedPhotoDto,
    description: 'Block photo',
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => RestConstructedPhotoDto)
  photo?: RestConstructedPhotoDto;
}

export class RestConstructedMetaInfoDto {
  @ApiPropertyOptional({ description: 'Meta description tag' })
  @IsOptional()
  @IsString()
  meta_tag_description?: string;

  @ApiPropertyOptional({ description: 'Meta title tag' })
  @IsOptional()
  @IsString()
  meta_tag_title?: string;

  @ApiPropertyOptional({ description: 'Schema' })
  @IsOptional()
  @IsString()
  schema?: string;

  @ApiPropertyOptional({ description: 'Schema script' })
  @IsOptional()
  @IsString()
  schema_script?: string;

  @ApiPropertyOptional({ description: 'Global script' })
  @IsOptional()
  @IsString()
  global_script?: string;

  @ApiPropertyOptional({ description: 'Date when blog will be posted' })
  @IsOptional()
  @IsString()
  date_when_will_post_blog?: string;

  @ApiPropertyOptional({ description: 'Category' })
  @IsOptional()
  @IsString()
  categoric?: string;

  @ApiPropertyOptional({ description: 'Page URL slug' })
  @IsOptional()
  @IsString()
  url?: string;

  @ApiPropertyOptional({ description: 'Page name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'State' })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiPropertyOptional({ description: 'Map link' })
  @IsOptional()
  @IsString()
  map_link?: string;

  @ApiPropertyOptional({ description: 'Redirect URL' })
  @IsOptional()
  @IsString()
  redirect_url?: string;

  @ApiPropertyOptional({ description: 'Video link' })
  @IsOptional()
  @IsString()
  video_link?: string;

  @ApiPropertyOptional({ description: 'Country' })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({ description: 'Salary information' })
  @IsOptional()
  @IsString()
  salary?: string;

  @ApiPropertyOptional({
    type: [RestSocialLinkDto],
    description: 'Social media links'
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RestSocialLinkDto)
  social_links?: RestSocialLinkDto[];
}

export class RestConstructedPreviewDto {
  @ApiPropertyOptional({ description: 'Preview headline' })
  @IsOptional()
  @IsString()
  headline?: string;

  @ApiPropertyOptional({ description: 'Preview description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Preview date' })
  @IsOptional()
  @IsString()
  date?: string;

  @ApiPropertyOptional({ description: 'Block type' })
  @IsOptional()
  @IsString()
  type_block?: string;

  @ApiPropertyOptional({ description: 'Experience' })
  @IsOptional()
  @IsString()
  experience?: string;

  @ApiPropertyOptional({
    type: RestConstructedPhotoDto,
    description: 'Preview photo',
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => RestConstructedPhotoDto)
  photo?: RestConstructedPhotoDto;
}

// Main DTOs
export class CreateConstructedPageRestDto {
  @ApiProperty({ enum: ConstructedPageType, description: 'Page type' })
  @IsEnum(ConstructedPageType)
  type: ConstructedPageType;

  @ApiPropertyOptional({ description: 'Whether the page is posted' })
  @IsOptional()
  @IsBoolean()
  is_posted?: boolean;

  @ApiPropertyOptional({ description: 'Unix timestamp for when to publish' })
  @IsOptional()
  @IsNumber()
  schedule_date?: number;

  @ApiPropertyOptional({ description: 'Company ID' })
  @IsOptional()
  @IsString()
  constructed_page_company_id?: string;

  @ApiPropertyOptional({
    type: [RestConstructedBlockDto],
    description: 'Page blocks',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RestConstructedBlockDto)
  blocks?: RestConstructedBlockDto[];

  @ApiPropertyOptional({
    type: RestConstructedMetaInfoDto,
    description: 'Meta information',
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => RestConstructedMetaInfoDto)
  meta_info?: RestConstructedMetaInfoDto;

  @ApiPropertyOptional({
    type: RestConstructedPreviewDto,
    description: 'Preview information',
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => RestConstructedPreviewDto)
  preview?: RestConstructedPreviewDto;
}

export class GetConstructedPagesQueryDto {
  @ApiPropertyOptional({ description: 'Page number (starts from 1)' })
  @IsOptional()
  page?: number;

  @ApiPropertyOptional({ description: 'Number of items per page' })
  @IsOptional()
  limit?: number;

  @ApiPropertyOptional({
    enum: ConstructedPageType,
    description: 'Filter by page type',
  })
  @IsOptional()
  @IsEnum(ConstructedPageType)
  type?: ConstructedPageType;

  @ApiPropertyOptional({ description: 'Filter by posted status' })
  @IsOptional()
  @IsBoolean()
  is_posted?: boolean;

  @ApiPropertyOptional({ description: 'Unix timestamp for when to publish' })
  @IsOptional()
  @IsNumber()
  schedule_date?: number;

  @ApiPropertyOptional({ description: 'Filter by company ID' })
  @IsOptional()
  @IsString()
  constructed_page_company_id?: string;
}

export class ConstructedPageResponseDto {
  @ApiProperty({ description: 'Page ID' })
  id: string;

  @ApiProperty({ enum: ConstructedPageType, description: 'Page type' })
  type: ConstructedPageType;

  @ApiPropertyOptional({ description: 'Post date as Unix timestamp' })
  post_date?: number;

  @ApiPropertyOptional({ description: 'Whether the page is posted' })
  is_posted?: boolean;

  @ApiPropertyOptional({ description: 'Unix timestamp for when to publish' })
  schedule_date?: number;

  @ApiPropertyOptional({ description: 'Company ID' })
  constructed_page_company_id?: string;

  @ApiPropertyOptional({ description: 'Creation date' })
  created_at?: Date;

  @ApiPropertyOptional({ description: 'Last update date' })
  updated_at?: Date;

  @ApiPropertyOptional({ description: 'Meta information' })
  meta_info?: any;

  @ApiPropertyOptional({ description: 'Page blocks' })
  blocks?: any[];

  @ApiPropertyOptional({ description: 'Preview information' })
  preview?: any;
}

export class PaginatedConstructedPagesResponseDto {
  @ApiProperty({
    type: [ConstructedPageResponseDto],
    description: 'List of pages',
  })
  data: ConstructedPageResponseDto[];

  @ApiProperty({ description: 'Total number of items' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Number of items per page' })
  limit: number;

  @ApiProperty({ description: 'Total number of pages' })
  totalPages: number;
}
