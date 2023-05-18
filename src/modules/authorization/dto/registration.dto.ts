import { Field, InputType, OmitType } from '@nestjs/graphql';
import { PasswordValidation } from '@tech-slk/nest-auth';
import { UserInput } from 'src/modules/user/dto/user.input';

@InputType()
export class RegistrationDto extends OmitType(UserInput, ['id']) {
  @Field(() => String)
  @PasswordValidation()
  password: string;
}
