import { ApiProperty } from '@nestjs/swagger';
import { Field, InputType } from '@nestjs/graphql';
import { Week } from '../../locksmith/locksmith-schedule/enum/week.enum';

@InputType('CreateScheduleDto')
export class CreateScheduleDto {
  @ApiProperty({ type: () => Week, enum: Week, example: Week.MONDAY })
  @Field(() => Week)
  name: Week;

  @ApiProperty({ type: () => Date, required: false })
  @Field(() => Date, { nullable: true })
  open_at?: Date;

  @ApiProperty({ type: () => Date, required: false })
  @Field(() => Date, { nullable: true })
  close_at?: Date;
}
