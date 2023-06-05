import { Field, InputType, PickType } from '@nestjs/graphql';
import { PasswordValidation } from '@tech-slk/nest-auth';
import { UserInput } from 'src/modules/user/dto/user.input';

@InputType()
export class AcceptInviteDto extends PickType(UserInput, [
  'name',
  'password',
] as const) {
  @Field(() => String)
  key: string;

  @Field(() => String)
  @PasswordValidation()
  password: string;
}
