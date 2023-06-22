import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsPositive } from 'class-validator';
import { UniqueUrl } from '../decorator/unique-url.decorator';
import { CreateScheduleDto } from './create-schedule.dto';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { IFileUpload } from 'src/modules/upload/type/i-file-upload';

@InputType()
export class CreateLocksmithDto {
  @Field(() => String)
  name: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  mail: string;

  @Field(() => String)
  link_to_site: string;

  @IsOptional()
  @UniqueUrl()
  @Field(() => String, { nullable: true })
  url?: string;

  @Field(() => GraphQLUpload, { nullable: true })
  file?: Promise<IFileUpload>;

  @Field(() => String)
  link_to_map: string;

  @Field(() => String, { nullable: true })
  owners_name?: string;

  @Field(() => String, { nullable: true })
  owners_phone?: string;

  @Field(() => [String])
  services: string[];

  @Field(() => String, { nullable: true })
  photo?: string;

  @Field(() => [String], { nullable: true })
  zips: string[];

  @Field(() => String, { nullable: true })
  description?: string;

  @IsPositive()
  @IsOptional()
  @Field(() => Number, { nullable: true })
  priority?: number;

  @Field(() => [CreateScheduleDto])
  schedule: CreateScheduleDto[];

  @Field(() => [String])
  address: string[];
}
