import { Field, ObjectType } from '@nestjs/graphql';
import { TechWithSchedule } from './tech.dto';

@ObjectType()
export class StateWithTechs {
  @Field(() => String)
  state: string;

  @Field(() => [TechWithSchedule])
  techs: TechWithSchedule[];
}
