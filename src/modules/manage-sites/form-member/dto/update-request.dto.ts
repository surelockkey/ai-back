import { Field, ID, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { CreateRequestDto } from './create-request.dto';
import { UpdateAddressDto } from './update-address.dto';
import { UpdateScheduleDto } from './update-schedule.dto';

@InputType()
export class UpdateRequestDto extends PartialType(
  OmitType(CreateRequestDto, ['address', 'schedule']),
) {
  @Field(() => ID)
  id: string;

  //   @ApiProperty({ type: () => UpdateScheduleDto })
  @Field(() => [UpdateScheduleDto], { nullable: true })
  schedule?: UpdateScheduleDto[];

  //   @ApiProperty({ type: () => [String] })
  @Field(() => [UpdateAddressDto], { nullable: true }) //[String])
  address?: UpdateAddressDto[]; //string[];
}
