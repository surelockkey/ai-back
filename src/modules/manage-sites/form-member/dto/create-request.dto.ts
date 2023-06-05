import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { CreateScheduleDto } from './create-schedule.dto';

@InputType()
export class CreateRequestDto {
  @ApiProperty({ type: () => String, example: 'TEST' })
  @Field(() => String)
  business_name: string;

  @ApiProperty({ type: () => String, example: 'TEST' })
  @Field(() => String)
  business_phone: string;

  @ApiProperty({ type: () => String, required: false, example: 'TEST' })
  @Field(() => String, { nullable: true })
  business_mail?: string;

  @ApiProperty({ type: () => String, example: 'TEST' })
  @Field(() => String)
  link_to_site: string;

  @ApiProperty({ type: () => String, example: 'TEST' })
  @Field(() => String)
  link_to_map: string;

  @ApiProperty({ type: () => String, example: 'TEST', required: false })
  @Field(() => String, { nullable: true })
  owners_name?: string;

  @ApiProperty({
    type: () => [String],
    isArray: true,
    nullable: false,
    example: ['TEST1', 'TEST2'],
  })
  @Field(() => [String])
  services: string[];

  @ApiProperty({ type: () => String, example: 'TEST' })
  @Field(() => String)
  owners_phone: string;

  @ApiProperty({ type: () => String, required: false, example: 'TEST' })
  @Field(() => String, { nullable: true })
  photo?: string;

  @ApiProperty({ type: () => String, required: false, example: 'TEST' })
  @Field(() => String, { nullable: true })
  files?: string;

  @ApiProperty({ type: () => String, required: false, example: 'TEST' })
  @Field(() => String, { nullable: true })
  description?: string;

  @ApiProperty({ type: () => CreateScheduleDto, isArray: true }) //? ADD []
  @Field(() => [CreateScheduleDto])
  schedule!: CreateScheduleDto[];

  @ApiProperty({ type: () => [String], isArray: true })
  @Field(() => [String])
  address!: string[];
}
