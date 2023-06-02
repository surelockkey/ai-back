import { Field, ID, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { CreateLocksmithDto } from './create-locksmith.dto';
import { UpdateAddressDto } from './update-address.dto';
import { UpdateScheduleDto } from './update-schedule.dto';

@InputType()
export class UpdateLocksmithDto extends PartialType(
  OmitType(CreateLocksmithDto, ['address', 'schedule']),
) {
  @Field(() => ID)
  id: string;

  //   @ApiProperty({ type: () => UpdateScheduleDto })
  @Field(() => [UpdateScheduleDto], { nullable: true })
  schedule?: UpdateScheduleDto[];

  //   @ApiProperty({ type: () => [String] })
  @Field(() => [UpdateAddressDto], { nullable: true })
  address?: UpdateAddressDto[];

  @Field(() => Boolean, { nullable: true })
  is_verified?: boolean;
}
