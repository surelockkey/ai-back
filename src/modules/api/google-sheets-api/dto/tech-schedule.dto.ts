import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GoogleSheetsTechSchedule {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  monday?: string;

  @Field(() => String, { nullable: true })
  tuesday?: string;

  @Field(() => String, { nullable: true })
  wednesday?: string;

  @Field(() => String, { nullable: true })
  thursday?: string;

  @Field(() => String, { nullable: true })
  friday?: string;

  @Field(() => String, { nullable: true })
  saturday?: string;

  @Field(() => String, { nullable: true })
  sunday?: string;

  @Field(() => String, { nullable: true })
  note?: string;

  @Field(() => String, { nullable: true })
  week_start?: string;

  @Field(() => String, { nullable: true })
  week_end?: string;

  @Field(() => String)
  active_state: string;
}
